import { supabase } from "@/integrations/supabase/client";

export interface SMSNotificationData {
  bookingId: string;
  phoneNumber: string;
  clientName: string;
  serviceName: string;
  appointmentDate: string;
  appointmentTime: string;
  therapistName: string;
  messageType: 'booking_confirmation' | 'reminder' | 'cancellation';
}

const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // If it starts with +, keep it
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  
  // Remove any leading + that might be left
  cleaned = cleaned.replace(/^\+/, '');
  
  // If it's 10 digits, add US country code
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  
  // If it's 11 digits starting with 1, add +
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  
  // Otherwise return with + prefix
  return `+${cleaned}`;
};

export const sendBookingSMS = async (data: SMSNotificationData): Promise<boolean> => {
  try {
    console.log('Sending SMS notification:', data);
    
    // Format phone number before sending
    const formattedData = {
      ...data,
      phoneNumber: formatPhoneNumber(data.phoneNumber)
    };
    
    console.log('Formatted phone number:', formattedData.phoneNumber);
    
    const { data: result, error } = await supabase.functions.invoke('send-booking-sms', {
      body: formattedData
    });

    if (error) {
      console.error('Error invoking SMS function:', error);
      return false;
    }

    console.log('SMS function result:', result);
    
    if (result?.error) {
      console.error('SMS function returned error:', result.error);
      return false;
    }
    
    return result?.success || false;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
};

export const saveBookingToDatabase = async (bookingData: {
  serviceName: string;
  servicePrice: number;
  serviceDuration: number;
  appointmentDate: string;
  appointmentTime: string;
  therapistName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  paymentReference?: string;
  userId?: string;
}) => {
  try {
    console.log('Saving booking to database:', bookingData);
    
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        user_id: bookingData.userId,
        service_name: bookingData.serviceName,
        therapist_name: bookingData.therapistName,
        client_name: bookingData.clientName,
        client_email: bookingData.clientEmail,
        client_phone: formatPhoneNumber(bookingData.clientPhone),
        appointment_date: bookingData.appointmentDate,
        appointment_time: bookingData.appointmentTime,
        duration: bookingData.serviceDuration,
        price: bookingData.servicePrice,
        status: 'confirmed',
        payment_reference: bookingData.paymentReference,
        payment_status: bookingData.paymentReference ? 'paid' : 'pending'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error saving booking:', error);
      return null;
    }

    console.log('Booking saved successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in saveBookingToDatabase:', error);
    return null;
  }
};
