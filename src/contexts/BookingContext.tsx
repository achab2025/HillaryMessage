
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useBookingActions } from '@/hooks/useBookingActions';
import { servicesMockData, therapistsMockData, Service } from '@/data/bookingMockData';
import type { BookingContextType, GuestInfo, PaymentInfo } from './BookingTypes';

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { 
    generateTimeSlots, 
    formatCurrency, 
    createNavigationHandlers 
  } = useBookingActions();

  // Initialize state
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Restore session from storage on initial load
  useEffect(() => {
    const savedProgress = sessionStorage.getItem('bookingProgress');
    
    if (savedProgress) {
      try {
        const {
          currentStep: savedStep,
          selectedService: savedService,
          selectedDate: savedDateString,
          selectedTime: savedTime,
          selectedTherapist: savedTherapist,
          guestInfo: savedGuestInfo
        } = JSON.parse(savedProgress);
        
        // Restore state from session storage
        if (savedStep) setCurrentStep(savedStep);
        if (savedService) setSelectedService(savedService);
        if (savedDateString) setSelectedDate(new Date(savedDateString));
        if (savedTime) setSelectedTime(savedTime);
        if (savedTherapist) setSelectedTherapist(savedTherapist);
        if (savedGuestInfo) setGuestInfo(savedGuestInfo);
      } catch (err) {
        console.error("Error restoring booking session:", err);
        sessionStorage.removeItem('bookingProgress');
      }
    }
  }, []);

  // Update available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setAvailableTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTime(""); // Reset selected time when date changes
    }
  }, [selectedDate, generateTimeSlots]);

  // Create navigation handlers
  const { 
    isNextDisabled, 
    handleNextStep, 
    handlePrevStep, 
    handleSubmit 
  } = createNavigationHandlers(
    currentStep,
    setCurrentStep,
    selectedService,
    selectedDate,
    selectedTime,
    selectedTherapist,
    guestInfo,
    paymentInfo,
    setGeneratedPassword,
    setPassword,
    setBookingComplete
  );

  const value = {
    currentStep,
    setCurrentStep,
    services: servicesMockData,
    selectedService,
    setSelectedService,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    availableTimeSlots,
    therapists: therapistsMockData,
    selectedTherapist,
    setSelectedTherapist,
    guestInfo,
    setGuestInfo,
    paymentInfo,
    setPaymentInfo,
    password,
    setPassword,
    generatedPassword,
    bookingComplete,
    setBookingComplete,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
    isNextDisabled,
    formatCurrency
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the booking context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

// Re-export types
export type { BookingContextType, GuestInfo, PaymentInfo };
