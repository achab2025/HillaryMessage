
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";
import GuestDetailsForm from "@/components/GuestDetailsForm";
import PaymentForm from "@/components/PaymentForm";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import NavigationButtons from "@/components/booking/NavigationButtons";
import TherapistSelector from "@/components/booking/TherapistSelector";
import ServiceSelectorBooking from "@/components/booking/ServiceSelectorBooking";
import { BookingProvider } from "@/contexts/BookingContext";
import BookingContent from "@/components/booking/BookingContent";
import { useToast } from "@/components/ui/use-toast";

const PublicBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Wrap the entire component with our BookingProvider
  return (
    <BookingProvider>
      <div className="min-h-screen bg-spa-cream/20 py-4 sm:py-6 md:py-8 px-2 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-spa-green hover:underline mb-4 sm:mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-spa-green-dark">Book Your Appointment</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Follow the steps below to schedule your massage session. 
            <span className="hidden sm:inline"> No account needed - we'll create one for you after booking.</span>
          </p>
          
          <BookingContent navigate={navigate} />
        </div>
      </div>
    </BookingProvider>
  );
};

export default PublicBooking;
