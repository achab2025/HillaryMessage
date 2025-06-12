
import { useContext } from "react";
import { AuthContext } from "@/App";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";
import { QuickBookingSection } from "@/components/home/QuickBookingSection";
import { PromoSection } from "@/components/home/PromoSection";

const Index = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={isLoggedIn} />
      <HeroSection />
      <QuickBookingSection />
      <FeaturesSection />
      <PromoSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
