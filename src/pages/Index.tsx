
import { useContext, useState } from "react";
import { AuthContext } from "@/App";
import { MessageSquare } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Navigation isLoggedIn={isLoggedIn} />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />

      {/* Chat Widget Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-colors z-50"
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
