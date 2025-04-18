
import { Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">About Us</h2>
          <p className="text-lg text-spa-gray">
            Discover the perfect blend of traditional and modern spa treatments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-spa-green-dark">Our Story</h3>
            <p className="text-spa-gray leading-relaxed">
              With over a decade of experience in wellness and relaxation, we've created
              a sanctuary where modern luxury meets traditional healing practices.
              Our expert therapists are dedicated to providing personalized care
              and exceptional service.
            </p>
            <div className="flex items-center gap-2 text-spa-green">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Experienced Therapists</span>
            </div>
            <div className="flex items-center gap-2 text-spa-green">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Premium Products</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/b5cf5200-2841-4228-8d6e-3d4386ff29d5.png"
              alt="Spa ambiance"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
