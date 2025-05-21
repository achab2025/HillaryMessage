
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { format } from "date-fns";
import { useBooking } from '@/contexts/BookingContext';

interface BookingConfirmationProps {
  bookingComplete: boolean;
  selectedService: any;
  selectedDate: Date | undefined;
  selectedTime: string;
  selectedTherapist: string;
  therapists: any[];
  guestInfo: any;
  generatedPassword: string;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  bookingComplete,
  selectedService,
  selectedDate,
  selectedTime,
  selectedTherapist,
  therapists,
  guestInfo,
  generatedPassword
}) => {
  const { formatCurrency } = useBooking();

  if (bookingComplete) {
    return (
      <div className="text-center py-6 sm:py-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-spa-cream text-spa-green mb-4">
          <Check className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-xl font-medium mb-2 text-spa-green-dark">Booking Complete!</h3>
        <p className="text-muted-foreground mb-6">
          Your appointment has been scheduled successfully.
        </p>
        <div className="bg-spa-cream p-4 sm:p-6 max-w-md mx-auto rounded-lg border border-spa-beige text-left mb-6">
          <h4 className="text-lg font-semibold mb-3 text-spa-green-dark flex items-center">
            Your Account Has Been Created
          </h4>
          <p className="mb-2 text-sm sm:text-base">
            <span className="font-medium">Email:</span> {guestInfo.email}
          </p>
          <p className="mb-4 text-sm sm:text-base">
            <span className="font-medium">Password:</span> {generatedPassword}
          </p>
          <div className="text-xs sm:text-sm text-spa-green-dark bg-white p-3 rounded-md border border-spa-beige">
            We've automatically created an account for you using the information you provided. 
            Please save these credentials to access your account dashboard and manage your appointments.
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          You'll be redirected to login page in a moment...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-spa-beige">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Service:</span>
              <span className="text-right">{selectedService?.name}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Date:</span>
              <span className="text-right">{selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Time:</span>
              <span className="text-right">{selectedTime}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Therapist:</span>
              <span className="text-right">
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Duration:</span>
              <span className="text-right">{selectedService?.duration} minutes</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Name:</span>
              <span className="text-right">{guestInfo.firstName} {guestInfo.lastName}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Contact:</span>
              <span className="text-right text-sm sm:text-base">{guestInfo.email} | {guestInfo.phone}</span>
            </div>
            <div className="flex flex-wrap justify-between text-lg font-medium">
              <span className="text-spa-green-dark">Total:</span>
              <span className="text-spa-green">
                {formatCurrency(selectedService?.price || 0)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-spa-cream border border-spa-beige rounded-lg p-4 text-xs sm:text-sm text-spa-green-dark">
        <p>
          <strong>Note:</strong> By confirming your booking, you agree to our terms and conditions.
        </p>
        <p className="mt-2">
          We'll automatically create an account for you so you can manage your appointments. 
          Your login credentials will be displayed after booking is complete.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
