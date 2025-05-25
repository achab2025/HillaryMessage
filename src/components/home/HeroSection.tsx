
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

export const HeroSection = () => {
  return (
    <AnimatedBackground className="min-h-screen">
      <header id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-spa-green/80 to-spa-green-dark/80" />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470"
            alt="Massage background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-lora animate-fade-in text-white">
              Experience Pure <span className="text-spa-cream">Relaxation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-spa-cream max-w-2xl mx-auto animate-fade-in">
              Discover a sanctuary of tranquility at Hillar Massage where expert therapists help you find
              balance, relief, and deep relaxation.
            </p>
            <p className="text-lg mb-12 text-spa-cream/90 max-w-xl mx-auto animate-fade-in">
              Immerse yourself in a world of luxurious treatments, peaceful ambiance,
              and rejuvenating experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/booking">
                <Button size="lg" className="bg-spa-green hover:bg-spa-green-dark text-lg px-8">
                  Book Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-spa-green-dark text-lg px-8 font-semibold">
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </AnimatedBackground>
  );
};
