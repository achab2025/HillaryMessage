
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Массаж лица",
    description: "Расслабляющий массаж для улучшения тонуса кожи и снятия напряжения.",
    duration: "45 мин",
    price: "3200 ₽",
    image: "bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470')]"
  },
  {
    id: 2,
    name: "Массаж спины",
    description: "Глубокий массаж спины для облегчения боли и напряжения в мышцах.",
    duration: "60 мин",
    price: "4500 ₽",
    image: "bg-[url('https://images.unsplash.com/photo-1519823551278-5a109f4235c5?q=80&w=1374')]"
  },
  {
    id: 3,
    name: "Спа программа",
    description: "Комплексный уход за телом с использованием натуральных компонентов.",
    duration: "90 мин",
    price: "6800 ₽",
    image: "bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470')]"
  },
  {
    id: 4,
    name: "Уход за лицом",
    description: "Процедуры по очищению, питанию и омоложению кожи лица.",
    duration: "60 мин",
    price: "4200 ₽",
    image: "bg-[url('https://images.unsplash.com/photo-1616394584738-fc6970f15c1b?q=80&w=1470')]"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">Наши СПА-ритуалы</h2>
          <p className="text-lg text-spa-gray">
            Мы предлагаем различные виды спа-процедур для удовлетворения ваших
            индивидуальных потребностей, от релаксации до снятия боли.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden card-hover border-spa-beige bg-white">
              <div className={`h-48 ${service.image} bg-cover bg-center`} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-spa-green-dark">{service.name}</h3>
                <p className="text-spa-gray mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-spa-gray" />
                      <span className="text-sm text-spa-gray">{service.duration}</span>
                    </div>
                    <span className="text-spa-green font-medium">{service.price}</span>
                  </div>
                  <Link to="/booking">
                    <Button variant="outline" size="sm" className="border-spa-green text-spa-green hover:bg-spa-green hover:text-white">Записаться</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/booking">
            <Button className="bg-spa-green hover:bg-spa-green-dark">Все услуги</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
