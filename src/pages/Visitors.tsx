import Icon from "@/components/ui/icon";

const Visitors = () => {
  const rules = [
    {
      icon: "Shield",
      title: "Безопасность превыше всего",
      description:
        "Не подходите близко к ограждениям, не просовывайте руки в вольеры",
    },
    {
      icon: "Ban",
      title: "Не кормите животных",
      description:
        "У животных специальная диета. Человеческая еда может навредить их здоровью",
    },
    {
      icon: "Volume2",
      title: "Соблюдайте тишину",
      description: "Громкие звуки могут напугать животных и нарушить их покой",
    },
    {
      icon: "Trash2",
      title: "Поддерживайте чистоту",
      description: "Используйте урны для мусора, берегите природу",
    },
    {
      icon: "Dog",
      title: "Домашние животные",
      description: "Вход с домашними животными запрещен, кроме собак-поводырей",
    },
    {
      icon: "Cigarette",
      title: "Курение запрещено",
      description: "Территория зоопарка - зона, свободная от курения",
    },
  ];

  const prices = [
    {
      category: "Взрослые",
      price: "400 ₽",
      description: "Посетители старше 18 лет",
      icon: "User",
    },
    {
      category: "Дети (7-17 лет)",
      price: "250 ₽",
      description: "Школьники и подростки",
      icon: "Users",
    },
    {
      category: "Дети (до 6 лет)",
      price: "Бесплатно",
      description: "При предъявлении документа",
      icon: "Baby",
    },
    {
      category: "Пенсионеры",
      price: "200 ₽",
      description: "При предъявлении удостоверения",
      icon: "Heart",
    },
    {
      category: "Студенты",
      price: "300 ₽",
      description: "При предъявлении студенческого билета",
      icon: "GraduationCap",
    },
    {
      category: "Семейный билет",
      price: "1000 ₽",
      description: "2 взрослых + 2 детей",
      icon: "Home",
    },
  ];

  const facilities = [
    {
      name: 'Кафе "Саванна"',
      description: "Перекус с видом на вольеры",
      icon: "Coffee",
      location: "Центральная аллея",
    },
    {
      name: "Детская площадка",
      description: "Игровая зона для малышей",
      icon: "Gamepad2",
      location: "Рядом с вольерами приматов",
    },
    {
      name: "Сувенирная лавка",
      description: "Подарки и сувениры",
      icon: "Gift",
      location: "У главного входа",
    },
    {
      name: "Медпункт",
      description: "Первая помощь",
      icon: "Plus",
      location: "Административное здание",
    },
    {
      name: "Туалеты",
      description: "Санузлы по всей территории",
      icon: "MapPin",
      location: "Каждые 200 метров",
    },
    {
      name: "Парковка",
      description: "Бесплатная автостоянка",
      icon: "Car",
      location: "Перед главным входом",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Информация для посетителей
          </h1>
          <p className="text-xl text-gray-600">
            Все что нужно знать перед посещением зоопарка
          </p>
        </div>

        {/* Schedule and Prices */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Schedule */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <Icon name="Clock" size={28} />
              Режим работы
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">
                  Понедельник - Воскресенье
                </span>
                <span className="text-green-600 font-semibold">
                  9:00 - 18:00
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">
                  Касса работает до
                </span>
                <span className="text-orange-600 font-semibold">17:30</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">
                  Санитарный день
                </span>
                <span className="text-red-600 font-semibold">
                  Первый понедельник месяца
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 flex items-center gap-2">
                <Icon name="Info" size={16} />
                Последний вход в зоопарк за 1 час до закрытия
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <Icon name="Map" size={28} />
              Карта зоопарка
            </h2>
            <div className="bg-gradient-to-br from-green-100 to-orange-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="mx-auto mb-4 text-green-600"
                />
                <p className="text-green-700 font-medium">
                  Интерактивная карта
                </p>
                <p className="text-sm text-green-600">Скоро будет доступна</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Бумажные карты доступны на входе в зоопарк
              </p>
            </div>
          </div>
        </div>

        {/* Ticket Prices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
            <Icon name="Ticket" size={28} />
            Стоимость билетов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((price, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={price.icon as any}
                      size={20}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800">{price.category}</h3>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {price.price}
                </div>
                <p className="text-sm text-gray-600">{price.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-orange-700 flex items-center gap-2">
              <Icon name="Star" size={16} />
              Льготы предоставляются при предъявлении соответствующих документов
            </p>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
            <Icon name="BookOpen" size={28} />
            Правила посещения
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-gray-100 rounded-lg"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={rule.icon as any}
                    size={24}
                    className="text-red-600"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{rule.title}</h3>
                  <p className="text-sm text-gray-600">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
            <Icon name="Building" size={28} />
            Удобства и услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-gray-100 rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={facility.icon as any}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {facility.description}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    {facility.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
