import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ServiceSelector from "@/components/ServiceSelector";
import BookingCalendar from "@/components/BookingCalendar";
import GuestDetailsForm from "@/components/GuestDetailsForm";
import PaymentForm from "@/components/PaymentForm";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import NavigationButtons from "@/components/booking/NavigationButtons";
import { useToast } from "@/components/ui/use-toast";

// Mock data for services
const services = [
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

// Mock data for available time slots
const generateTimeSlots = (date) => {
  // In a real app, you'd fetch this from the server based on the selected date
  const baseSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
  ];
  
  // Simulate some slots being unavailable on different days
  const day = new Date(date).getDay();
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

// Mock data for therapists
const therapists = [
  { id: "1", name: "Jane Smith", specialization: "Swedish Massage" },
  { id: "2", name: "Michael Johnson", specialization: "Deep Tissue" },
  { id: "3", name: "Sarah Williams", specialization: "Hot Stone Therapy" }
];

const PublicBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [password, setPassword] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const steps = [
    "Choose Service",
    "Select Date & Time",
    "Choose Therapist",
    "Your Details",
    "Payment",
    "Confirm"
  ];

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

  useEffect(() => {
    if (selectedDate) {
      setAvailableTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTime(""); // Reset selected time when date changes
    }
  }, [selectedDate]);

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
    } else {
      // Show validation message
      if (currentStep === 4 && !isGuestInfoValid()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
      } else if (currentStep === 5 && !isPaymentInfoValid()) {
        toast({
          title: "Invalid Payment Information",
          description: "Please check your payment details",
          variant: "destructive",
        });
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleSubmit = async () => {
    // Here you would normally send the booking to your backend
    // Create a user account with the provided guest info and generated password
    // For this demo, we'll just simulate a successful booking
    
    // In a real implementation, this would call your backend API
    setTimeout(() => {
      setBookingComplete(true);
      
      // In a real app, you'd redirect to the dashboard after a delay
      // or show the user their booking confirmation with login details
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-violet-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-2 text-violet-800">Book Your Appointment</h1>
        <p className="text-muted-foreground mb-8">Follow the steps below to schedule your massage session.</p>
        
        <BookingSteps currentStep={currentStep} steps={steps} />
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {currentStep === 1 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6 text-violet-800">Select a Service</h2>
              <ServiceSelector 
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {therapists.map((therapist) => (
                  <Card 
                    key={therapist.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md border border-violet-100",
                      selectedTherapist === therapist.id ? "ring-2 ring-violet-500" : ""
                    )}
                    onClick={() => setSelectedTherapist(therapist.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-100 to-purple-200 mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl text-violet-600 font-bold">
                            {therapist.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h3 className="font-medium text-lg">{therapist.name}</h3>
                        <p className="text-muted-foreground text-sm">{therapist.specialization}</p>
                      </div>
                    </CardContent>
                    {selectedTherapist === therapist.id && (
                      <div className="absolute top-4 right-4 bg-violet-600 text-white rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
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
          
          <NavigationButtons
            currentStep={currentStep}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            handleSubmit={handleSubmit}
            bookingComplete={bookingComplete}
            disableNext={isNextDisabled()}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicBooking;
