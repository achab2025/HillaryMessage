
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";

export const QuickBookingSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="wave-animation" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-spa-cream p-6 md:p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Calendar className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-spa-green-dark">Quick Booking</h3>
              <p className="text-spa-gray mb-4 text-sm md:text-base">Book your next appointment in under 2 minutes</p>
              <Link to="/book-now">
                <Button className="w-full bg-spa-green hover:bg-spa-green-dark">
                  Book Now
                </Button>
              </Link>
            </div>
            
            <div className="bg-spa-cream p-6 md:p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Clock className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-spa-green-dark">Today's Availability</h3>
              <p className="text-spa-gray mb-4 text-sm md:text-base">Check real-time slot availability</p>
              <Link to="/book-now">
                <Button variant="outline" className="w-full border-spa-green text-spa-green hover:bg-spa-green hover:text-white">
                  View Times
                </Button>
              </Link>
            </div>
            
            <div className="bg-spa-cream p-6 md:p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg sm:col-span-2 md:col-span-1">
              <Star className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-spa-green-dark">Special Offers</h3>
              <p className="text-spa-gray mb-4 text-sm md:text-base">View our current promotions</p>
              <Link to="/book-now">
                <Button variant="outline" className="w-full border-spa-green text-spa-green hover:bg-spa-green hover:text-white">
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
