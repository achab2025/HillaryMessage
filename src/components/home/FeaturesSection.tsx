
import { Bath, Flower, Leaf, Sparkles } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">What Awaits You at Our Salon</h2>
          <p className="text-lg text-spa-gray">
            We offer an exceptional spa experience through our commitment to quality, 
            professionalism, and a personalized approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Flower className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Unique Programs</h3>
            <p className="text-spa-gray">
              Individual approach to each client and development of personalized programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Natural Components</h3>
            <p className="text-spa-gray">
              We use only environmentally friendly and natural products for procedures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Bath className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Comfortable Atmosphere</h3>
            <p className="text-spa-gray">
              Cozy setting and pleasant atmosphere for complete relaxation and rest.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Professionalism</h3>
            <p className="text-spa-gray">
              Team of certified specialists with years of experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
