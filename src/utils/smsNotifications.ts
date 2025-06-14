
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

export const sendBookingSMS = async (data: SMSNotificationData): Promise<boolean> => {
  try {
    console.log('Sending SMS notification:', data);
    
    const { data: result, error } = await supabase.functions.invoke('send-booking-sms', {
      body: data
    });

    if (error) {
      console.error('Error invoking SMS function:', error);
      return false;
    }

    console.log('SMS function result:', result);
    return result?.success || false;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
};

export const saveBookingToDatabase = async (bookingData: {
  serviceName: string;
  servicePrice: number;
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
      .insert({
        service_name: bookingData.serviceName,
        service_price: bookingData.servicePrice,
        appointment_date: bookingData.appointmentDate,
        appointment_time: bookingData.appointmentTime,
        therapist_name: bookingData.therapistName,
        client_name: bookingData.clientName,
        client_email: bookingData.clientEmail,
        client_phone: bookingData.clientPhone,
        payment_reference: bookingData.paymentReference,
        user_id: bookingData.userId,
        status: 'confirmed'
      })
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
