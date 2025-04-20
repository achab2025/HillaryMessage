
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";

export const QuickBookingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <Calendar className="h-10 w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Quick Booking</h3>
              <p className="text-spa-gray mb-4">Book your next appointment in under 2 minutes</p>
              <Link to="/booking">
                <Button className="w-full bg-spa-green hover:bg-spa-green-dark">
                  Book Now
                </Button>
              </Link>
            </div>
            
            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <Clock className="h-10 w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Today's Availability</h3>
              <p className="text-spa-gray mb-4">Check real-time slot availability</p>
              <Link to="/booking">
                <Button variant="outline" className="w-full border-spa-green text-spa-green hover:bg-spa-green hover:text-white">
                  View Times
                </Button>
              </Link>
            </div>
            
            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <Star className="h-10 w-10 mx-auto mb-4 text-spa-green" />
              <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Special Offers</h3>
              <p className="text-spa-gray mb-4">View our current promotions</p>
              <Link to="/booking">
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
