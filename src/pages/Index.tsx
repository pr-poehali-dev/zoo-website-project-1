import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      title: "Биохимические анализаторы",
      description: "Современное оборудование для биохимических исследований",
      icon: "Microscope",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Анестезиология и реанимация",
      description: "Оборудование для анестезии и интенсивной терапии",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Хирургия",
      description: "Хирургические инструменты и оборудование",
      icon: "Scissors",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Рентген и УЗИ",
      description: "Диагностическое оборудование высокого качества",
      icon: "Scan",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Качество",
      description: "Сертифицированное медицинское оборудование",
    },
    {
      icon: "Truck",
      title: "Доставка",
      description: "Быстрая доставка по всей России",
    },
    {
      icon: "Wrench",
      title: "Сервис",
      description: "Полное техническое обслуживание",
    },
    {
      icon: "Clock",
      title: "Поддержка",
      description: "Работаем с 9:00 до 18:00 ежедневно",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.NODE_ENV === "development" ? "https://cdn.poehali.dev/files/53b36e88-faef-49f2-83f9-3bc5bfba9dd2.png" : "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop"})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block text-blue-200 text-2xl md:text-3xl font-normal mb-4">
              ООО "МиоМед"
            </span>
            АНЕСТЕЗИОЛОГИЯ И РЕАНИМАЦИЯ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Медицинское оборудование и расходные материалы высочайшего качества
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-3 justify-center shadow-lg">
              <Icon name="ShoppingCart" size={24} />
              ЗАКАЗАТЬ
            </button>
            <Link
              to="/catalog"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-3 justify-center"
            >
              <Icon name="Search" size={24} />
              Каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Icon name="Package" size={40} className="text-blue-600" />
              Каталог
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент медицинского оборудования для различных
              областей медицины
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon
                        name={category.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-2">
                      Подробнее
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">Почему выбирают именно нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <Icon
                    name={advantage.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Phone"
                size={48}
                className="mx-auto mb-4 opacity-90"
              />
              <h3 className="text-2xl font-bold mb-4">Телефоны</h3>
              <div className="space-y-2 text-blue-100">
                <p>+7 (3532) 56-98-66</p>
                <p>+7 (932) 536-05-62</p>
                <p>+7 (932) 536-05-63</p>
                <p>+7 (932) 866-01-05</p>
                <p>+7 (932) 536-05-08</p>
              </div>
            </div>
            <div className="text-center">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 opacity-90"
              />
              <h3 className="text-2xl font-bold mb-4">Адрес</h3>
              <p className="text-blue-100">
                Россия, 460005, г. Оренбург,
                <br />
                ул. Орская, 174 А
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Clock"
                size={48}
                className="mx-auto mb-4 opacity-90"
              />
              <h3 className="text-2xl font-bold mb-4">Режим работы</h3>
              <p className="text-blue-100">
                пн-пт: с 9:00 до 18:00
                <br />
                сб-вс: выходные
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
