
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-purple-900/80" />
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070"
          alt="Spa background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 pt-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-lora">
            Experience True <span className="text-violet-300">Relaxation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-violet-100 max-w-2xl mx-auto">
            Discover a sanctuary of tranquility where skilled therapists help you find
            balance, relief, and deep relaxation through our premium massage services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-8">
                Book Your Session
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="#services">
              <Button size="lg" variant="outline" 
                className="border-white text-white hover:bg-white/20 text-lg px-8">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
