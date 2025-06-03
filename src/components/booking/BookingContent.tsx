
import React, { useEffect } from 'react';
import { NavigateFunction } from "react-router-dom";
import BookingCalendar from "@/components/BookingCalendar";
import GuestDetailsForm from "@/components/GuestDetailsForm";
import PaystackPayment from "@/components/PaystackPayment";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import NavigationButtons from "@/components/booking/NavigationButtons";
import TherapistSelector from "@/components/booking/TherapistSelector";
import ServiceSelectorBooking from "@/components/booking/ServiceSelectorBooking";
import { useBooking } from "@/contexts/BookingContext";
import { useToast } from "@/components/ui/use-toast";

interface BookingContentProps {
  navigate: NavigateFunction;
}

const BookingContent: React.FC<BookingContentProps> = ({ navigate }) => {
  const { toast } = useToast();
  const {
    currentStep,
    services,
    selectedService,
    setSelectedService,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    availableTimeSlots,
    therapists,
    selectedTherapist,
    setSelectedTherapist,
    guestInfo,
    setGuestInfo,
    paymentInfo,
    setPaymentInfo,
    generatedPassword,
    bookingComplete,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    handlePaymentSuccess,
    isNextDisabled,
    paymentReference
  } = useBooking();

  const steps = [
    "Choose Service",
    "Select Date & Time",
    "Choose Therapist",
    "Your Details",
    "Payment",
    "Confirm"
  ];

  // Redirect to login after successful booking
  useEffect(() => {
    if (bookingComplete) {
      // Send email receipt automatically when booking is complete
      if (guestInfo.email) {
        toast({
          title: "Receipt Sent",
          description: `A receipt with your booking details has been sent to ${guestInfo.email}`,
        });
      }
      
      // In a real app, you'd redirect to the login page after a delay
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 10000);  // Extended time to allow user to download/view receipt
      
      return () => clearTimeout(timeout);
    }
  }, [bookingComplete, navigate, guestInfo, toast]);

  // Show toast when validation fails
  const handleNext = () => {
    if (isNextDisabled()) {
      if (currentStep === 4) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
      }
    }
    handleNextStep();
  };

  const handlePaymentClose = () => {
    toast({
      title: "Payment Cancelled",
      description: "You can try again when you're ready",
    });
  };

  return (
    <>
      <BookingSteps currentStep={currentStep} steps={steps} />
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {currentStep === 1 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Select a Service</h2>
            <ServiceSelectorBooking 
              services={services} 
              selectedService={selectedService} 
              setSelectedService={setSelectedService} 
            />
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Select Date & Time</h2>
            <BookingCalendar
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              availableTimeSlots={availableTimeSlots}
            />
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Choose a Therapist</h2>
            <TherapistSelector 
              therapists={therapists}
              selectedTherapist={selectedTherapist}
              setSelectedTherapist={setSelectedTherapist}
            />
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Your Details</h2>
            <GuestDetailsForm guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
          </div>
        )}
        
        {currentStep === 5 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Complete Payment</h2>
            <PaystackPayment
              amount={selectedService?.price || 0}
              email={guestInfo.email}
              firstName={guestInfo.firstName}
              lastName={guestInfo.lastName}
              phone={guestInfo.phone}
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
              disabled={!guestInfo.email || !guestInfo.firstName || !guestInfo.lastName}
            />
          </div>
        )}
        
        {currentStep === 6 && (
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-medium mb-4 md:mb-6 text-spa-green-dark">Confirm Your Booking</h2>
            <BookingConfirmation
              bookingComplete={bookingComplete}
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedTherapist={selectedTherapist}
              therapists={therapists}
              guestInfo={guestInfo}
              generatedPassword={generatedPassword}
            />
          </div>
        )}
        
        <NavigationButtons
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNext}
          handleSubmit={handleSubmit}
          bookingComplete={bookingComplete}
          disableNext={isNextDisabled()}
        />
      </div>
    </>
  );
};

export default BookingContent;
