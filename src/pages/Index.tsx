import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "Экспозиции",
      description: "Более 300 видов животных со всего мира",
      path: "/exhibitions",
      icon: "Binoculars",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Экскурсии",
      description: "Познавательные программы для всех возрастов",
      path: "/tours",
      icon: "Users",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "События",
      description: "Праздники, мастер-классы и выставки",
      path: "/events",
      icon: "Calendar",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Билеты",
      description: "Удобная онлайн покупка билетов",
      path: "/tickets",
      icon: "Ticket",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const animals = [
    {
      name: "Амурский тигр",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop",
      description: "Редкий подвид тигра, символ дикой природы Дальнего Востока",
    },
    {
      name: "Африканский лев",
      image:
        "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop",
      description: "Царь зверей в просторном открытом вольере",
    },
    {
      name: "Бурый медведь",
      image:
        "https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?w=400&h=300&fit=crop",
      description: "Хозяин российских лесов в естественной среде",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1600&h=900&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Добро пожаловать в
            <span className="block text-green-400">Оренбургский зоопарк</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Откройте удивительный мир дикой природы в сердце Оренбурга
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tickets"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2 justify-center"
            >
              <Icon name="Ticket" size={20} />
              Купить билеты
            </Link>
            <Link
              to="/exhibitions"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2 justify-center"
            >
              <Icon name="Binoculars" size={20} />
              Наши животные
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Что вас ждет в зоопарке
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale"
              >
                <div
                  className={`h-20 bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Познакомьтесь с нашими питомцами
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover-scale"
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {animal.name}
                  </h3>
                  <p className="text-gray-600">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/exhibitions"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Icon name="ArrowRight" size={20} />
              Все животные
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Режим работы</h3>
              <p className="text-green-100">Ежедневно 9:00 - 18:00</p>
            </div>
            <div>
              <Icon name="MapPin" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Адрес</h3>
              <p className="text-green-100">
                ул. Парковая, 32
                <br />
                Парк им. Перовского
              </p>
            </div>
            <div>
              <Icon name="Phone" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Телефон</h3>
              <p className="text-green-100">+7 (3532) 77-25-82</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
