
import React, { useEffect } from 'react';
import { NavigateFunction } from "react-router-dom";
import BookingCalendar from "@/components/BookingCalendar";
import GuestDetailsForm from "@/components/GuestDetailsForm";
import PaymentForm from "@/components/PaymentForm";
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
    isNextDisabled
  } = useBooking();

  const steps = [
    "Choose Service",
    "Select Date & Time",
    "Choose Therapist",
    "Your Details",
    "Payment",
    "Confirm"
  ];

  // Save booking progress to session storage when values change
  useEffect(() => {
    if (!bookingComplete) {
      const bookingState = {
        currentStep,
        selectedService,
        selectedDate: selectedDate ? selectedDate.toISOString() : null,
        selectedTime,
        selectedTherapist,
        guestInfo
      };
      
      sessionStorage.setItem('bookingProgress', JSON.stringify(bookingState));
    }
  }, [currentStep, selectedService, selectedDate, selectedTime, selectedTherapist, guestInfo, bookingComplete]);

  // Redirect to login after successful booking
  useEffect(() => {
    if (bookingComplete) {
      // Clear session storage after booking is complete
      sessionStorage.removeItem('bookingProgress');
      
      // In a real app, you'd redirect to the dashboard after a delay
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, [bookingComplete, navigate]);

  // Show toast when validation fails
  const handleNext = () => {
    if (isNextDisabled()) {
      if (currentStep === 4) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
      } else if (currentStep === 5) {
        toast({
          title: "Invalid Payment Information",
          description: "Please check your payment details",
          variant: "destructive",
        });
      }
    }
    handleNextStep();
  };

  return (
    <>
      <BookingSteps currentStep={currentStep} steps={steps} />
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all">
        <div className="md:min-h-[500px]">
          {currentStep === 1 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Select a Service</h2>
              <ServiceSelectorBooking 
                services={services} 
                selectedService={selectedService} 
                setSelectedService={setSelectedService} 
              />
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Select Date & Time</h2>
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
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Choose a Therapist</h2>
              <TherapistSelector 
                therapists={therapists}
                selectedTherapist={selectedTherapist}
                setSelectedTherapist={setSelectedTherapist}
              />
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Your Details</h2>
              <GuestDetailsForm guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
            </div>
          )}
          
          {currentStep === 5 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Payment Information</h2>
              <PaymentForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
            </div>
          )}
          
          {currentStep === 6 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Confirm Your Booking</h2>
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
        </div>
        
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
