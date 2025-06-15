import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Каталог", path: "/catalog", icon: "Package" },
    { name: "Заказ", path: "/orders", icon: "ShoppingCart" },
    { name: "Реквизиты", path: "/requisites", icon: "FileText" },
    { name: "Производители", path: "/manufacturers", icon: "Building" },
    { name: "Контакты", path: "/contacts", icon: "Phone" },
    { name: "Регистрация", path: "/registration", icon: "UserPlus" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-white border-b border-blue-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-blue-600">
                <Icon name="MapPin" size={16} />
                <span>г. Оренбург, ул. Орская, 174 А</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Icon name="Clock" size={16} />
                <span>пн-пт: с 9:00 до 18:00</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Icon name="Phone" size={16} />
                <span>+7 (3532) 56-98-66</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Heart" size={28} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">МиоМед</h1>
                <p className="text-sm text-blue-100">
                  Медицинское оборудование
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              <Icon
                name={isOpen ? "X" : "Menu"}
                size={24}
                className="text-white"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-blue-500/30 py-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "text-blue-100 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
