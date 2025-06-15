import { useState } from "react";
import Icon from "@/components/ui/icon";

const Exhibitions = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Все животные", icon: "Globe" },
    { id: "predators", name: "Хищники", icon: "Zap" },
    { id: "herbivores", name: "Травоядные", icon: "Leaf" },
    { id: "birds", name: "Птицы", icon: "Bird" },
    { id: "primates", name: "Приматы", icon: "Users" },
    { id: "reptiles", name: "Рептилии", icon: "Bug" },
  ];

  const animals = [
    {
      id: 1,
      name: "Амурский тигр",
      category: "predators",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop",
      description:
        "Самый крупный представитель семейства кошачьих. Обитает в Приморском крае.",
      facts: [
        "Вес: до 300 кг",
        "Длина: до 3 метров",
        "Популяция: около 500 особей",
      ],
      habitat: "Таежные леса Дальнего Востока",
      status: "Под угрозой исчезновения",
    },
    {
      id: 2,
      name: "Африканский лев",
      category: "predators",
      image:
        "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop",
      description: "Царь зверей, живущий в прайдах. Символ силы и мужества.",
      facts: [
        "Вес: до 250 кг",
        "Скорость: до 80 км/ч",
        "Продолжительность жизни: 15-20 лет",
      ],
      habitat: "Саванны и полупустыни Африки",
      status: "Уязвимый вид",
    },
    {
      id: 3,
      name: "Бурый медведь",
      category: "predators",
      image:
        "https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?w=400&h=300&fit=crop",
      description:
        "Крупнейший хищник России. Всеядный, хорошо плавает и лазает по деревьям.",
      facts: ["Вес: до 650 кг", "Рост: до 3 метров", "Спячка: 5-6 месяцев"],
      habitat: "Леса Евразии и Северной Америки",
      status: "Не угрожает",
    },
    {
      id: 4,
      name: "Африканский слон",
      category: "herbivores",
      image:
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop",
      description:
        "Самое крупное наземное млекопитающее. Обладает развитым интеллектом.",
      facts: ["Вес: до 7 тонн", "Рост: до 4 метров", "Хобот: 40 000 мышц"],
      habitat: "Саванны и леса Африки",
      status: "Под угрозой исчезновения",
    },
    {
      id: 5,
      name: "Амурский леопард",
      category: "predators",
      image:
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop",
      description:
        "Редчайшая крупная кошка планеты. Обитает на Дальнем Востоке.",
      facts: [
        "Вес: до 48 кг",
        "Скорость: до 60 км/ч",
        "Популяция: около 100 особей",
      ],
      habitat: "Леса Приморского края",
      status: "Критически угрожаемый",
    },
    {
      id: 6,
      name: "Орел-беркут",
      category: "birds",
      image:
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop",
      description:
        "Крупная хищная птица, символ многих стран. Отличный охотник.",
      facts: [
        "Размах крыльев: до 2.5 метров",
        "Скорость пикирования: до 320 км/ч",
        "Зрение: в 8 раз острее человеческого",
      ],
      habitat: "Горы и степи Евразии",
      status: "Не угрожает",
    },
  ];

  const filteredAnimals = animals.filter((animal) => {
    const matchesCategory =
      selectedCategory === "all" || animal.category === selectedCategory;
    const matchesSearch = animal.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Наши экспозиции
          </h1>
          <p className="text-xl text-gray-600">
            Познакомьтесь с удивительными обитателями зоопарка
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Поиск животных..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700"
                  }`}
                >
                  <Icon name={category.icon as any} size={16} />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {animal.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      animal.status === "Критически угрожаемый"
                        ? "bg-red-100 text-red-800"
                        : animal.status === "Под угрозой исчезновения"
                          ? "bg-orange-100 text-orange-800"
                          : animal.status === "Уязвимый вид"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                    }`}
                  >
                    {animal.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{animal.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      Интересные факты:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {animal.facts.map((fact, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      Среда обитания:
                    </h4>
                    <p className="text-sm text-gray-600">{animal.habitat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto mb-4 text-gray-400"
            />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Животные не найдены
            </h3>
            <p className="text-gray-500">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exhibitions;
