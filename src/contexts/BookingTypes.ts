
import { Service, Therapist } from '@/data/bookingMockData';

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface PaymentInfo {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface BookingContextType {
  // Current step
  currentStep: number;
  setCurrentStep: (step: number) => void;
  
  // Service selection
  services: Service[];
  selectedService: Service | null;
  setSelectedService: (service: Service) => void;
  
  // Date and time selection
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  availableTimeSlots: string[];
  
  // Therapist selection
  therapists: Therapist[];
  selectedTherapist: string;
  setSelectedTherapist: (id: string) => void;
  
  // Guest information
  guestInfo: GuestInfo;
  setGuestInfo: (info: GuestInfo) => void;
  
  // Payment information
  paymentInfo: PaymentInfo;
  setPaymentInfo: (info: PaymentInfo) => void;
  
  // Password for account creation
  password: string;
  setPassword: (password: string) => void;
  generatedPassword: string;
  
  // Booking completion status
  bookingComplete: boolean;
  setBookingComplete: (complete: boolean) => void;
  
  // Helper functions
  handleNextStep: () => void;
  handlePrevStep: () => void;
  handleSubmit: () => void;
  isNextDisabled: () => boolean;
  formatCurrency: (amount: number) => string;
}
