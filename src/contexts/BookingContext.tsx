
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useBookingActions } from '@/hooks/useBookingActions';

// Define types
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
}

export interface Therapist {
  id: string;
  name: string;
  specialization: string;
}

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

interface BookingContextType {
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

// Mock data for services
const servicesMockData: Service[] = [
  {
    id: "1",
    name: "Deep Relaxation Massage",
    description: "A gentle form of massage that uses long strokes, kneading, and circular movements on superficial layers of muscle.",
    duration: 60,
    price: 85,
    image: "bg-gradient-to-r from-violet-400/30 to-purple-400/30"
  },
  {
    id: "2",
    name: "Therapeutic Massage",
    description: "A massage that focuses on realigning deeper layers of muscles and connective tissue.",
    duration: 60,
    price: 95,
    image: "bg-gradient-to-r from-purple-400/30 to-violet-500/30"
  },
  {
    id: "3",
    name: "Hot Stone Therapy",
    description: "A specialty massage that uses smooth, heated stones as an extension of the therapist's hands.",
    duration: 90,
    price: 110,
    image: "bg-gradient-to-r from-violet-500/30 to-purple-600/30"
  },
  {
    id: "4",
    name: "Aromatherapy Massage",
    description: "A massage therapy that uses essential oils to enhance psychological and physical well-being.",
    duration: 60,
    price: 90,
    image: "bg-gradient-to-r from-purple-300/30 to-violet-400/30"
  }
];

// Mock data for therapists
const therapistsMockData: Therapist[] = [
  { id: "1", name: "Jane Smith", specialization: "Swedish Massage" },
  { id: "2", name: "Michael Johnson", specialization: "Deep Tissue" },
  { id: "3", name: "Sarah Williams", specialization: "Hot Stone Therapy" }
];

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get booking actions from our custom hook
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

  // Update available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setAvailableTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTime(""); // Reset selected time when date changes
    }
  }, [selectedDate, generateTimeSlots]);

  // Create navigation handlers using the action hook
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
