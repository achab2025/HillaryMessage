
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Clock, Check } from "lucide-react";

// Mock data for services
const services = [
  {
    id: "1",
    name: "Swedish Massage",
    description: "A gentle form of massage that uses long strokes, kneading, and circular movements on superficial layers of muscle.",
    duration: 60,
    price: 85,
    image: "bg-gradient-to-r from-spa-blue/30 to-spa-teal/30"
  },
  {
    id: "2",
    name: "Deep Tissue Massage",
    description: "A massage that focuses on realigning deeper layers of muscles and connective tissue.",
    duration: 60,
    price: 95,
    image: "bg-gradient-to-r from-spa-teal/30 to-spa-green/30"
  },
  {
    id: "3",
    name: "Hot Stone Therapy",
    description: "A specialty massage that uses smooth, heated stones as an extension of the therapist's hands.",
    duration: 90,
    price: 110,
    image: "bg-gradient-to-r from-spa-lavender/30 to-spa-blue/30"
  },
  {
    id: "4",
    name: "Aromatherapy Massage",
    description: "A massage therapy that uses essential oils to enhance psychological and physical well-being.",
    duration: 60,
    price: 90,
    image: "bg-gradient-to-r from-spa-blush/30 to-spa-lavender/30"
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

const Booking = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookingComplete, setBookingComplete] = useState(false);
  
  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Update available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setAvailableTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTime(""); // Reset selected time when date changes
    }
  }, [selectedDate]);

  const handleNextStep = () => {
    if (
      (currentStep === 1 && selectedService) || 
      (currentStep === 2 && selectedDate) || 
      (currentStep === 3 && selectedTime) ||
      (currentStep === 4 && selectedTherapist)
    ) {
      setCurrentStep(currentStep + 1);
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
    setBookingComplete(true);
    
    // In a real app, you might want to redirect to the dashboard after a delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  
  if (!isLoggedIn) {
    return null; // Redirecting via useEffect
  }

  return (
    <div className="min-h-screen bg-spa-cream py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-spa-blue hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
        <p className="text-muted-foreground mb-8">Follow the steps below to schedule your next massage session.</p>
        
        {/* Progress indicator */}
        <div className="w-full mb-8">
          <div className="flex justify-between mb-2">
            {["Choose Service", "Select Date", "Pick Time", "Choose Therapist", "Confirm"].map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "text-sm font-medium text-center flex-1",
                  currentStep > index + 1 ? "text-spa-blue" : 
                  currentStep === index + 1 ? "text-spa-blue" : "text-muted-foreground"
                )}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-spa-blue h-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep - 1) * 25}%` }}
            />
          </div>
        </div>
        
        {/* Booking steps */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Step 1: Choose Service */}
          {currentStep === 1 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6">Select a Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md overflow-hidden",
                      selectedService?.id === service.id ? "ring-2 ring-spa-blue" : ""
                    )}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className={cn("h-24 w-full", service.image)} />
                    <CardHeader className="pb-2">
                      <CardTitle className="flex justify-between">
                        <span>{service.name}</span>
                        <span className="text-spa-blue font-normal">
                          {formatCurrency(service.price)}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                      <p className="text-sm mt-2 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration} minutes
                      </p>
                    </CardContent>
                    {selectedService?.id === service.id && (
                      <div className="absolute top-4 right-4 bg-spa-blue text-white rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 2: Select Date */}
          {currentStep === 2 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6">Select a Date</h2>
              <div className="flex flex-col items-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={{ before: new Date() }}
                  className="rounded-md border shadow mx-auto"
                />
              </div>
            </div>
          )}
          
          {/* Step 3: Select Time */}
          {currentStep === 3 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6">Select a Time</h2>
              <p className="text-muted-foreground mb-4">
                Available times for {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      selectedTime === time ? "bg-spa-blue text-white" : "hover:bg-spa-blue/10"
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 4: Select Therapist */}
          {currentStep === 4 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6">Choose a Therapist</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {therapists.map((therapist) => (
                  <Card 
                    key={therapist.id}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedTherapist === therapist.id ? "ring-2 ring-spa-blue" : ""
                    )}
                    onClick={() => setSelectedTherapist(therapist.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-spa-blue/20 mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl text-spa-blue font-bold">
                            {therapist.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h3 className="font-medium text-lg">{therapist.name}</h3>
                        <p className="text-muted-foreground text-sm">{therapist.specialization}</p>
                      </div>
                    </CardContent>
                    {selectedTherapist === therapist.id && (
                      <div className="absolute top-4 right-4 bg-spa-blue text-white rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 5: Confirm Booking */}
          {currentStep === 5 && (
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-6">Confirm Your Booking</h2>
              
              {bookingComplete ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Booking Complete!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your appointment has been scheduled successfully.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Redirecting to your dashboard...
                  </p>
                </div>
              ) : (
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
                        <div className="flex justify-between text-lg font-medium">
                          <span>Total:</span>
                          <span className="text-spa-blue">
                            {formatCurrency(selectedService?.price || 0)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                    <p>
                      <strong>Note:</strong> A valid payment method will be required at the time of your appointment. 
                      You may cancel or reschedule your appointment up to 24 hours before the scheduled time.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Navigation buttons */}
          <CardFooter className="flex justify-between p-6 bg-muted/20">
            {currentStep > 1 && !bookingComplete && (
              <Button 
                variant="outline" 
                onClick={handlePrevStep}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            )}
            {currentStep < 5 && (
              <Button 
                className="ml-auto"
                onClick={handleNextStep}
                disabled={
                  (currentStep === 1 && !selectedService) ||
                  (currentStep === 2 && !selectedDate) ||
                  (currentStep === 3 && !selectedTime) ||
                  (currentStep === 4 && !selectedTherapist)
                }
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {currentStep === 5 && !bookingComplete && (
              <Button 
                className="ml-auto bg-spa-blue hover:bg-spa-blue/90"
                onClick={handleSubmit}
              >
                Confirm Booking
              </Button>
            )}
          </CardFooter>
        </div>
      </div>
    </div>
  );
};

export default Booking;
