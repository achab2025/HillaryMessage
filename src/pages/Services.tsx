
import { Navigation } from "@/components/layout/Navigation";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={false} />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
