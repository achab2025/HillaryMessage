
import React, { createContext, useContext, useState, useEffect } from 'react';

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

// Generate time slots for a given date
const generateTimeSlots = (date: Date | undefined): string[] => {
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
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
  }, [selectedDate]);

  // Format currency for displaying prices
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Generate random password for account creation
  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // Validation helpers
  const isGuestInfoValid = () => {
    return (
      guestInfo.firstName.trim() !== "" &&
      guestInfo.lastName.trim() !== "" &&
      guestInfo.email.trim() !== "" &&
      guestInfo.phone.trim() !== ""
    );
  };

  const isPaymentInfoValid = () => {
    return (
      paymentInfo.cardholderName.trim() !== "" &&
      paymentInfo.cardNumber.trim() !== "" &&
      paymentInfo.expiryDate.trim() !== "" &&
      paymentInfo.cvv.trim() !== ""
    );
  };

  // Navigation logic
  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !selectedService;
      case 2:
        return !selectedDate || !selectedTime;
      case 3:
        return !selectedTherapist;
      case 4:
        return !isGuestInfoValid();
      case 5:
        return !isPaymentInfoValid();
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (
      (currentStep === 1 && selectedService) || 
      (currentStep === 2 && selectedDate && selectedTime) || 
      (currentStep === 3 && selectedTherapist) ||
      (currentStep === 4 && isGuestInfoValid()) ||
      (currentStep === 5 && isPaymentInfoValid())
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

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would normally send the booking to your backend
    // For this demo, we'll just simulate a successful booking
    setTimeout(() => {
      setBookingComplete(true);
    }, 2000);
  };

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
