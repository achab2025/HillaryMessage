
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-spa-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-spa-cream mb-4">Спа-салон</h3>
            <p className="text-spa-green-light mb-4">
              Ваше убежище для релаксации и оздоровления через экспертные спа-процедуры.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-spa-green-light hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="#services" className="text-spa-green-light hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="#about" className="text-spa-green-light hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="#contact" className="text-spa-green-light hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Массаж лица</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Массаж спины</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Спа программы</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Уход за лицом</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Контакты</h4>
            <address className="not-italic text-spa-green-light">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <p>ул. Релаксации, 123</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <p>+7 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <p>info@spa-salon.ru</p>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t border-spa-green mt-8 pt-8 text-center text-spa-green-light">
          <p>&copy; {new Date().getFullYear()} Спа-салон. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
