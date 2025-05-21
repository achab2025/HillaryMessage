
import React from 'react';
import { format } from 'date-fns';
import { useBooking } from '@/contexts/BookingContext';
import { FileText } from 'lucide-react';

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
  
  return (
    <div className="bg-white p-6 rounded-lg border border-spa-beige max-w-2xl mx-auto" id="booking-receipt">
      <div className="flex justify-between items-start mb-6 pb-4 border-b border-spa-beige">
        <div>
          <h2 className="text-xl font-bold text-spa-green-dark">Serene Touch Spa</h2>
          <p className="text-muted-foreground text-sm">123 Relaxation Avenue</p>
          <p className="text-muted-foreground text-sm">Wellness City, WC 10101</p>
        </div>
        <div className="text-right">
          <div className="text-spa-green-dark font-semibold">RECEIPT</div>
          <div className="text-sm text-muted-foreground">#{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</div>
          <div className="text-sm text-muted-foreground">
            {format(new Date(bookingDate), 'MMM dd, yyyy')}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-spa-green-dark font-semibold mb-2">Client Information</h3>
        <div className="bg-spa-cream/30 p-3 rounded-md">
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

      <div className="mb-6">
        <h3 className="text-spa-green-dark font-semibold mb-2">Booking Details</h3>
        <table className="w-full">
          <tbody>
            <tr className="border-b border-spa-beige">
              <td className="py-2 font-medium">Service</td>
              <td className="py-2 text-right">{selectedService?.name}</td>
            </tr>
            <tr className="border-b border-spa-beige">
              <td className="py-2 font-medium">Date</td>
              <td className="py-2 text-right">{selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}</td>
            </tr>
            <tr className="border-b border-spa-beige">
              <td className="py-2 font-medium">Time</td>
              <td className="py-2 text-right">{selectedTime}</td>
            </tr>
            <tr className="border-b border-spa-beige">
              <td className="py-2 font-medium">Therapist</td>
              <td className="py-2 text-right">
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </td>
            </tr>
            <tr className="border-b border-spa-beige">
              <td className="py-2 font-medium">Duration</td>
              <td className="py-2 text-right">{selectedService?.duration} minutes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center py-2 border-b border-spa-beige">
          <span className="font-semibold">Subtotal</span>
          <span>{formatCurrency(selectedService?.price || 0)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-spa-beige">
          <span className="font-semibold">Tax</span>
          <span>{formatCurrency((selectedService?.price || 0) * 0.1)}</span>
        </div>
        <div className="flex justify-between items-center py-3 font-bold text-lg">
          <span className="text-spa-green-dark">Total</span>
          <span className="text-spa-green">{formatCurrency((selectedService?.price || 0) * 1.1)}</span>
        </div>
      </div>

      <div className="border p-4 rounded-md bg-spa-cream/30 mb-4">
        <h3 className="text-spa-green-dark font-semibold mb-2">Your Account Information</h3>
        <p className="mb-1"><span className="font-medium">Email:</span> {guestInfo.email}</p>
        <p><span className="font-medium">Password:</span> {generatedPassword}</p>
        <p className="text-xs mt-2 text-muted-foreground">Please save these credentials to access your account.</p>
      </div>

      <div className="text-center text-sm text-muted-foreground mt-8">
        <p>Thank you for choosing Serene Touch Spa!</p>
        <p>We look forward to providing you with an exceptional experience.</p>
      </div>
    </div>
  );
};

export default BookingReceipt;
