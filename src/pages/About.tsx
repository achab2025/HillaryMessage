
import { Navigation } from "@/components/layout/Navigation";
import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={false} />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
