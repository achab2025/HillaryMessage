
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingContent from "@/components/booking/BookingContent";
import { BookingProvider } from "@/contexts/BookingContext";

const PublicBooking = () => {
  const navigate = useNavigate();

  // Wrap the entire component with our BookingProvider
  return (
    <BookingProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-violet-600 hover:text-violet-800 transition-colors hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold mb-2 text-violet-800">Book Your Appointment</h1>
          <p className="text-muted-foreground mb-8">Complete the steps below to schedule your session. Your details are securely saved as you progress.</p>
          
          <BookingContent navigate={navigate} />
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Need assistance? Contact us at <span className="text-violet-600">support@spaservice.com</span></p>
            <p className="mt-1">Your booking data is securely processed and protected.</p>
          </div>
        </div>
      </div>
    </BookingProvider>
  );
};

export default PublicBooking;
