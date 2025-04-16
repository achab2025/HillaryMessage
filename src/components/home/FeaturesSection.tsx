
import { Bath, Flower, Leaf, Sparkles } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">Что вас ждет в нашем салоне</h2>
          <p className="text-lg text-spa-gray">
            Мы предлагаем исключительный опыт спа-процедур благодаря нашей приверженности качеству,
            профессионализму и индивидуальному подходу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Flower className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Уникальные программы</h3>
            <p className="text-spa-gray">
              Индивидуальный подход к каждому клиенту и разработка персональных программ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Натуральные компоненты</h3>
            <p className="text-spa-gray">
              Используем только экологически чистые и натуральные продукты для процедур.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Bath className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Комфортная атмосфера</h3>
            <p className="text-spa-gray">
              Уютная обстановка и приятная атмосфера для полного расслабления и отдыха.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md text-center shadow-sm border border-spa-beige">
            <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-spa-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-spa-green-dark">Профессионализм</h3>
            <p className="text-spa-gray">
              Команда сертифицированных специалистов с многолетним опытом работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
