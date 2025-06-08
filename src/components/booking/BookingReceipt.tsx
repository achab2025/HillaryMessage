
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import ReceiptHeader from './receipt/ReceiptHeader';
import ReceiptConfirmation from './receipt/ReceiptConfirmation';
import ClientDetails from './receipt/ClientDetails';
import AppointmentDetails from './receipt/AppointmentDetails';
import PaymentSummary from './receipt/PaymentSummary';
import AccountInfo from './receipt/AccountInfo';
import Guidelines from './receipt/Guidelines';
import ReceiptFooter from './receipt/ReceiptFooter';

interface BookingReceiptProps {
  selectedService: any;
  selectedDate: Date | undefined;
  selectedTime: string;
  selectedTherapist: string;
  therapists: any[];
  guestInfo: any;
  generatedPassword: string;
}

const BookingReceipt: React.FC<BookingReceiptProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  selectedTherapist,
  therapists,
  guestInfo,
  generatedPassword
}) => {
  const { formatCurrency } = useBooking();
  
  const bookingDate = new Date().toISOString();
  const receiptId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return (
    <div className="bg-white max-w-md mx-auto shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <ReceiptHeader receiptId={receiptId} bookingDate={bookingDate} />
      <ReceiptConfirmation />
      <AppointmentDetails 
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedTherapist={selectedTherapist}
        therapists={therapists}
      />
      <PaymentSummary selectedService={selectedService} formatCurrency={formatCurrency} />
      <ClientDetails guestInfo={guestInfo} bookingDate={bookingDate} />
      <AccountInfo guestInfo={guestInfo} generatedPassword={generatedPassword} />
      <Guidelines />
      <ReceiptFooter bookingDate={bookingDate} />
    </div>
  );
};

export default BookingReceipt;
