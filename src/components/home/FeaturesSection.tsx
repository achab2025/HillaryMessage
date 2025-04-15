
import { Star, Heart, Gift } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Serene Touch</h2>
          <p className="text-lg text-muted-foreground">
            We deliver exceptional massage experiences through our commitment to quality,
            expertise, and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-spa-cream p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-spa-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8 text-spa-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Therapists</h3>
            <p className="text-muted-foreground">
              Our licensed massage therapists have years of experience and specialized training.
            </p>
          </div>

          <div className="bg-spa-cream p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-spa-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-spa-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
            <p className="text-muted-foreground">
              Each session is tailored to your specific needs, preferences, and wellness goals.
            </p>
          </div>

          <div className="bg-spa-cream p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Experience</h3>
            <p className="text-muted-foreground">
              From our tranquil atmosphere to premium products, every detail is designed for your comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
