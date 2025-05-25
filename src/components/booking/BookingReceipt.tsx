
import React from 'react';
import { format } from 'date-fns';
import { useBooking } from '@/contexts/BookingContext';
import { CheckCircle } from 'lucide-react';

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
    <div className="bg-white p-8 rounded-lg max-w-md mx-auto text-center" id="booking-receipt">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-spa-green" />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-spa-green-dark mb-2">
        Thanks for your booking!
      </h1>

      {/* Order Details */}
      <p className="text-muted-foreground mb-2">
        Thanks for booking appointment{' '}
        <span className="text-spa-green font-medium">#{receiptId}</span>!
      </p>
      <p className="text-muted-foreground mb-8">
        We will send you a confirmation within 24 hours.
      </p>

      {/* Booking Details */}
      <div className="bg-spa-cream/30 p-6 rounded-lg mb-6 text-left">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-spa-green-dark font-medium">Service:</span>
            <span className="text-right">{selectedService?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-spa-green-dark font-medium">Date:</span>
            <span className="text-right">{selectedDate ? format(selectedDate, "MMM dd, yyyy") : ""}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-spa-green-dark font-medium">Time:</span>
            <span className="text-right">{selectedTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-spa-green-dark font-medium">Therapist:</span>
            <span className="text-right">
              {therapists.find(t => t.id === selectedTherapist)?.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-spa-green-dark font-medium">Duration:</span>
            <span className="text-right">{selectedService?.duration} min</span>
          </div>
          <div className="border-t border-spa-beige pt-3 mt-3">
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-spa-green-dark">Total:</span>
              <span className="text-spa-green">{formatCurrency(selectedService?.price || 0)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="bg-spa-green/5 p-4 rounded-lg mb-6 text-left">
        <h3 className="text-spa-green-dark font-semibold mb-3">Client Information</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Name:</span> {guestInfo.firstName} {guestInfo.lastName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {guestInfo.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {guestInfo.phone}
          </p>
        </div>
      </div>

      {/* Account Information */}
      <div className="bg-spa-cream/50 p-4 rounded-lg mb-8 text-left">
        <h3 className="text-spa-green-dark font-semibold mb-3">Your Account Information</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Email:</span> {guestInfo.email}</p>
          <p><span className="font-medium">Password:</span> {generatedPassword}</p>
          <p className="text-xs mt-2 text-muted-foreground">Please save these credentials to access your account.</p>
        </div>
      </div>

      {/* Contact Message */}
      <p className="text-muted-foreground mb-4">
        If you have any questions or queries then feel free to get in contact with us.
      </p>

      {/* Signature */}
      <p className="text-muted-foreground mb-8">All the best,</p>
      
      {/* Spa Logo/Name */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-spa-green-dark">Serene Touch Spa</h2>
        <p className="text-sm text-muted-foreground">Your wellness sanctuary</p>
      </div>

      {/* Receipt Footer */}
      <div className="text-center text-xs text-muted-foreground pt-4 border-t border-spa-beige">
        <p>Receipt generated on {format(new Date(bookingDate), 'MMM dd, yyyy')}</p>
        <p>123 Relaxation Avenue, Wellness City, WC 10101</p>
      </div>
    </div>
  );
};

export default BookingReceipt;
