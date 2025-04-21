
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Star, Gift } from "lucide-react";

export const PromoSection = () => {
  return (
    <section className="py-20 bg-spa-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Offer Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Special Package: Summer Relaxation
              </h2>
              <p className="text-lg mb-8 text-spa-cream">
                Experience the ultimate relaxation with our summer package including a full body massage,
                facial treatment, and complimentary aromatherapy session.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>60-minute full body massage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>30-minute facial treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>Complimentary aromatherapy</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-white text-spa-green-dark hover:bg-spa-cream">
                    Book Package
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            {/* Right: Animated Features */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-spa-cream/80 rounded-xl px-8 py-7 shadow-lg flex items-center gap-6 animate-fade-in hover:scale-105 transition-transform duration-300">
                <Heart className="h-10 w-10 text-spa-green-dark animate-floating" />
                <div>
                  <div className="text-xl font-semibold text-spa-green-dark mb-1">Deep Wellness</div>
                  <p className="text-spa-green-dark/70 font-montserrat">
                    Heartfelt care by certified therapists designed for your personal rejuvenation.
                  </p>
                </div>
              </div>
              <div className="bg-spa-green/90 rounded-xl px-8 py-7 shadow-lg flex items-center gap-6 animate-fade-in delay-150 hover:scale-105 transition-transform duration-300">
                <Star className="h-10 w-10 text-spa-cream animate-floating" />
                <div>
                  <div className="text-xl font-semibold text-spa-cream mb-1">5-Star Experience</div>
                  <p className="text-spa-cream/80 font-montserrat">
                    Trusted by thousands—luxurious ambiance &amp; comfort in every treatment.
                  </p>
                </div>
              </div>
              <div className="bg-green-100/80 rounded-xl px-8 py-7 shadow-lg flex items-center gap-6 animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
                <Gift className="h-10 w-10 text-spa-green-dark animate-floating" />
                <div>
                  <div className="text-xl font-semibold text-spa-green-dark mb-1">Special Gift</div>
                  <p className="text-spa-green-dark/70 font-montserrat">
                    Receive an exclusive wellness kit with every summer package booking.
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-spa-green text-white px-6 py-3 rounded-full shadow-xl animate-floating">
                <span className="text-lg font-bold">Save 20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
