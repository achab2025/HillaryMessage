
import { useContext, useState } from "react";
import { AuthContext } from "@/App";
import { MessageSquare } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AboutSection } from "@/components/home/AboutSection"; // Added import
import { Footer } from "@/components/layout/Footer";
import { QuickBookingSection } from "@/components/home/QuickBookingSection";
import { PromoSection } from "@/components/home/PromoSection";

const Index = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={isLoggedIn} />
      <HeroSection />
      <QuickBookingSection />
      <FeaturesSection />
      <PromoSection />
      <ServicesSection />
      <AboutSection /> {/* Added AboutSection component */}
      <TestimonialsSection />
      <Footer />

      {/* Chat Widget Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-spa-green text-white p-4 rounded-full shadow-lg hover:bg-spa-green-dark transition-colors z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Widget */}
      {isChatOpen && (
        <ChatWidget onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
};

export default Index;
