
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
      <div className="text-center py-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-medium mb-2">Booking Complete!</h3>
        <p className="text-muted-foreground mb-6">
          Your appointment has been scheduled successfully.
        </p>
        <div className="bg-violet-50 p-6 max-w-md mx-auto rounded-lg border border-violet-200 text-left mb-6">
          <h4 className="text-lg font-semibold mb-3 text-violet-800 flex items-center">
            Your Account Details
          </h4>
          <p className="mb-2">
            <span className="font-medium">Email:</span> {guestInfo.email}
          </p>
          <p className="mb-4">
            <span className="font-medium">Password:</span> {generatedPassword}
          </p>
          <div className="text-sm text-violet-700 bg-violet-100 p-3 rounded-md">
            Please save these credentials to access your account dashboard and manage your appointments.
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Redirecting to login page...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Service:</span>
              <span>{selectedService?.name}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Date:</span>
              <span>{selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Time:</span>
              <span>{selectedTime}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Therapist:</span>
              <span>
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Duration:</span>
              <span>{selectedService?.duration} minutes</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Name:</span>
              <span>{guestInfo.firstName} {guestInfo.lastName}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Contact:</span>
              <span>{guestInfo.email} | {guestInfo.phone}</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span className="text-violet-600">
                {formatCurrency(selectedService?.price || 0)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-violet-800">
        <p>
          <strong>Note:</strong> By confirming your booking, you agree to our terms and conditions.
        </p>
        <p>
          We'll create an account for you so you can manage your appointments. Your login credentials will be displayed after booking is complete.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
