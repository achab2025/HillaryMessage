
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-spa-green/90 to-spa-green-dark/90" />
        <img
          src="/lovable-uploads/b5cf5200-2841-4228-8d6e-3d4386ff29d5.png"
          alt="Spa ambiance"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-4">
              <Heart className="w-4 h-4 mr-2" />
              <span>Welcome to Your Wellness Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight font-lora">
              Discover True <br />
              <span className="text-spa-cream">Relaxation & Peace</span>
            </h1>
            
            <p className="text-lg text-spa-cream/90 max-w-xl">
              Experience the perfect blend of traditional and modern spa treatments, 
              designed to rejuvenate your body and calm your mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-spa-cream text-spa-green-dark hover:bg-white flex items-center gap-2 text-lg"
                asChild
              >
                <Link to="/booking">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                asChild
              >
                <Link to="#services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Expert Therapists</h3>
                  <p className="text-spa-cream/80">Trained professionals with years of experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Natural Products</h3>
                  <p className="text-spa-cream/80">100% organic and natural ingredients</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Modern Facilities</h3>
                  <p className="text-spa-cream/80">State-of-the-art spa equipment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Personalized Care</h3>
                  <p className="text-spa-cream/80">Treatments tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
