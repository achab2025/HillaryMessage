
import { useState, useCallback } from 'react';
import { GuestInfo, PaymentInfo } from '@/contexts/BookingContext';
import { Service } from '@/data/bookingMockData';

// This hook separates all the booking actions from the state management
export const useBookingActions = () => {
  // Generate time slots for a given date
  const generateTimeSlots = useCallback((date: Date | undefined): string[] => {
    if (!date) return [];
    
    // In a real app, you'd fetch this from the server based on the selected date
    const baseSlots = [
      "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
    ];
    
    // Simulate some slots being unavailable on different days
    const day = date.getDay();
    if (day === 0) { // Sunday
      return baseSlots.filter((_, i) => i % 3 !== 0); // Remove every 3rd slot
    } else if (day === 6) { // Saturday
      return baseSlots.filter((_, i) => i % 2 !== 0); // Remove every 2nd slot
    } else if (day === 1) { // Monday
      return baseSlots.slice(2); // Remove first two slots
    } else if (day === 5) { // Friday
      return baseSlots.slice(0, -2); // Remove last two slots
    }
    return baseSlots;
  }, []);

  // Format currency for displaying prices in Ghana Cedis
  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS'
    }).format(amount);
  }, []);

  // Generate random password for account creation
  const generateRandomPassword = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }, []);

  // Validation helpers
  const isGuestInfoValid = useCallback((guestInfo: GuestInfo) => {
    return (
      guestInfo.firstName.trim() !== "" &&
      guestInfo.lastName.trim() !== "" &&
      guestInfo.email.trim() !== "" &&
      guestInfo.phone.trim() !== ""
    );
  }, []);

  // For Paystack integration, we don't need payment form validation
  const isPaymentInfoValid = useCallback((paymentInfo: PaymentInfo) => {
    // This is kept for compatibility but not used with Paystack
    return true;
  }, []);

  // Higher-level booking actions
  const createNavigationHandlers = useCallback((
    currentStep: number,
    setCurrentStep: (step: number) => void,
    selectedService: Service | null,
    selectedDate: Date | undefined,
    selectedTime: string,
    selectedTherapist: string,
    guestInfo: GuestInfo,
    paymentInfo: PaymentInfo,
    setGeneratedPassword: (password: string) => void,
    setPassword: (password: string) => void,
    setBookingComplete: (complete: boolean) => void,
    setPaymentReference?: (reference: string) => void
  ) => {
    // Check if next button should be disabled
    const isNextDisabled = () => {
      switch (currentStep) {
        case 1:
          return !selectedService;
        case 2:
          return !selectedDate || !selectedTime;
        case 3:
          return !selectedTherapist;
        case 4:
          return !isGuestInfoValid(guestInfo);
        case 5:
          return false; // Paystack handles payment validation
        default:
          return false;
      }
    };

    // Handle next step button
    const handleNextStep = () => {
      if (
        (currentStep === 1 && selectedService) || 
        (currentStep === 2 && selectedDate && selectedTime) || 
        (currentStep === 3 && selectedTherapist) ||
        (currentStep === 4 && isGuestInfoValid(guestInfo)) ||
        (currentStep === 5) // Skip payment validation for Paystack
      ) {
        setCurrentStep(currentStep + 1);
        
        // If moving to the final confirmation step, generate a password
        if (currentStep === 5) {
          const generated = generateRandomPassword();
          setGeneratedPassword(generated);
          setPassword(generated);
        }
      }
    };

    // Handle previous step button
    const handlePrevStep = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };

    // Handle Paystack payment success
    const handlePaymentSuccess = (reference: any) => {
      if (setPaymentReference) {
        setPaymentReference(reference.reference);
      }
      // Move to confirmation step
      setCurrentStep(6);
      
      // Generate password for account creation
      const generated = generateRandomPassword();
      setGeneratedPassword(generated);
      setPassword(generated);
    };

    // Handle form submission (final booking completion)
    const handleSubmit = async () => {
      // Here you would normally send the booking to your backend
      // For this demo, we'll just simulate a successful booking
      setTimeout(() => {
        setBookingComplete(true);
      }, 2000);
    };

    return {
      isNextDisabled,
      handleNextStep,
      handlePrevStep,
      handleSubmit,
      handlePaymentSuccess
    };
  }, [generateRandomPassword, isGuestInfoValid]);

  return {
    generateTimeSlots,
    formatCurrency,
    generateRandomPassword,
    isGuestInfoValid,
    isPaymentInfoValid,
    createNavigationHandlers
  };
};
