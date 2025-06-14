
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

interface BookingSMSRequest {
  bookingId: string;
  phoneNumber: string;
  clientName: string;
  serviceName: string;
  appointmentDate: string;
  appointmentTime: string;
  therapistName: string;
  messageType: 'booking_confirmation' | 'reminder' | 'cancellation';
}

const formatMessage = (data: BookingSMSRequest): string => {
  const { clientName, serviceName, appointmentDate, appointmentTime, therapistName, messageType } = data;
  
  switch (messageType) {
    case 'booking_confirmation':
      return `Hi ${clientName}! Your ${serviceName} appointment is confirmed for ${appointmentDate} at ${appointmentTime} with ${therapistName}. Thank you for choosing Hillar Massage! Reply STOP to opt out.`;
    
    case 'reminder':
      return `Reminder: Your ${serviceName} appointment with ${therapistName} is tomorrow at ${appointmentTime}. We look forward to seeing you at Hillar Massage! Reply STOP to opt out.`;
    
    case 'cancellation':
      return `Hi ${clientName}, your ${serviceName} appointment scheduled for ${appointmentDate} at ${appointmentTime} has been cancelled. Please contact us to reschedule. - Hillar Massage`;
    
    default:
      return `Hi ${clientName}! Your ${serviceName} appointment is scheduled for ${appointmentDate} at ${appointmentTime} with ${therapistName}. - Hillar Massage`;
  }
};

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

    if (response.ok) {
      const result = await response.json();
      console.log('SMS sent successfully:', result.sid);
      return true;
    } else {
      const error = await response.json();
      console.error('Twilio API error:', error);
      return false;
    }
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
    const requestData: BookingSMSRequest = await req.json();
    console.log('Received SMS request:', requestData);

    const { bookingId, phoneNumber, messageType } = requestData;

    // Generate the message
    const message = formatMessage(requestData);

    // Log the SMS notification attempt
    const { error: logError } = await supabase
      .from('sms_notifications')
      .insert({
        booking_id: bookingId,
        phone_number: phoneNumber,
        message: message,
        message_type: messageType,
        status: 'pending'
      });

    if (logError) {
      console.error('Error logging SMS notification:', logError);
    }

    // Send the SMS
    const success = await sendSMS(phoneNumber, message);

    // Update the SMS notification status
    if (logError === null) {
      await supabase
        .from('sms_notifications')
        .update({
          status: success ? 'sent' : 'failed',
          sent_at: success ? new Date().toISOString() : null
        })
        .eq('booking_id', bookingId)
        .eq('message_type', messageType)
        .order('created_at', { ascending: false })
        .limit(1);
    }

    return new Response(
      JSON.stringify({ 
        success, 
        message: success ? 'SMS sent successfully' : 'Failed to send SMS',
        messageContent: message
      }),
      {
        status: success ? 200 : 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in send-booking-sms function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
