
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Ольга К.",
    image: "bg-spa-green-light",
    stars: 5,
    text: "Я регулярно посещаю этот спа-салон уже больше года и не могу представить, что пойду куда-то еще. Их терапевты невероятно профессиональны, а атмосфера очень успокаивающая."
  },
  {
    id: 2,
    name: "Михаил В.",
    image: "bg-spa-beige",
    stars: 5,
    text: "Массаж спины здесь просто невероятный. Я пришел с серьезной болью в спине и ушел, чувствуя себя новым человеком. Очень рекомендую!"
  },
  {
    id: 3,
    name: "Елена С.",
    image: "bg-spa-green-light",
    stars: 5,
    text: "Красивое пространство, профессиональный персонал, а процедуры с горячими камнями - это просто божественно. Обязательно вернусь за другими процедурами."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">Отзывы наших клиентов</h2>
          <p className="text-lg text-spa-gray">
            Узнайте, что говорят наши довольные клиенты о своем опыте в нашем спа-салоне.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-spa-beige shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`inline h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="italic text-spa-gray mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center mr-3`}>
                    <span className="font-bold text-spa-green">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-spa-green-dark">{testimonial.name}</h4>
                    <p className="text-sm text-spa-gray">Постоянный клиент</p>
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
