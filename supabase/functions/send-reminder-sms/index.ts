
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const TWILIO_ACCOUNT_SID = "AC55a3f57bb6d1bbb357ea05e201cfda6b";
const TWILIO_AUTH_TOKEN = "e2f6d5439caa2d1651b1255c74eb4425";
const TWILIO_PHONE_NUMBER = "+15076235172";

const sendSMS = async (phoneNumber: string, message: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: TWILIO_PHONE_NUMBER,
        To: phoneNumber,
        Body: message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // This function is designed to be called by a cron job
    // Get all bookings for tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    console.log('Checking for appointments on:', tomorrowStr);

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('appointment_date', tomorrowStr)
      .eq('status', 'confirmed');

    if (error) {
      console.error('Error fetching bookings:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch bookings' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${bookings?.length || 0} bookings for tomorrow`);

    if (!bookings || bookings.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No bookings found for tomorrow' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send reminder SMS for each booking
    const results = [];
    for (const booking of bookings) {
      const message = `Reminder: Your ${booking.service_name} appointment with ${booking.therapist_name} is tomorrow at ${booking.appointment_time}. We look forward to seeing you at Hillar Massage! Reply STOP to opt out.`;
      
      // Log the SMS notification attempt
      await supabase
        .from('sms_notifications')
        .insert({
          booking_id: booking.id,
          phone_number: booking.client_phone,
          message: message,
          message_type: 'reminder',
          status: 'pending'
        });

      const success = await sendSMS(booking.client_phone, message);
      
      // Update the SMS notification status
      await supabase
        .from('sms_notifications')
        .update({
          status: success ? 'sent' : 'failed',
          sent_at: success ? new Date().toISOString() : null
        })
        .eq('booking_id', booking.id)
        .eq('message_type', 'reminder')
        .order('created_at', { ascending: false })
        .limit(1);

      results.push({
        bookingId: booking.id,
        clientName: booking.client_name,
        success
      });

      console.log(`SMS reminder ${success ? 'sent' : 'failed'} for booking ${booking.id}`);
    }

    return new Response(
      JSON.stringify({ 
        message: `Processed ${bookings.length} reminder SMS`,
        results 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-reminder-sms function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
