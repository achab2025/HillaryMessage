
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    image: "bg-spa-lavender/40",
    stars: 5,
    text: "I've been coming to Serene Touch for over a year now and I can't imagine going anywhere else. Their therapists are incredibly skilled and the atmosphere is so calming."
  },
  {
    id: 2,
    name: "Michael T.",
    image: "bg-spa-blue/40",
    stars: 5,
    text: "The deep tissue massage here is absolutely incredible. I came in with serious back pain and left feeling like a new person. Highly recommend!"
  },
  {
    id: 3,
    name: "Emma W.",
    image: "bg-spa-teal/40",
    stars: 4,
    text: "Beautiful space, professional staff, and the hot stone therapy was divine. Will definitely be returning for more treatments."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our satisfied clients about their Serene Touch experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`inline h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center mr-3`}>
                    <span className="font-bold text-spa-blue">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
