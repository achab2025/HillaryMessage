
import { Award, Users, Clock } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark font-lora">About Our Spa</h2>
          <p className="text-lg text-spa-gray max-w-2xl mx-auto">
            With over a decade of experience, we've been helping people find their path to relaxation and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Excellence in Service</h3>
            <p className="text-spa-gray">
              Award-winning spa treatments and exceptional customer service since 2010.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Expert Team</h3>
            <p className="text-spa-gray">
              Our certified therapists bring years of experience and expertise.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Flexible Hours</h3>
            <p className="text-spa-gray">
              Open 7 days a week with extended hours for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
