import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Экспозиции", path: "/exhibitions", icon: "Binoculars" },
    { name: "Посетителям", path: "/visitors", icon: "Info" },
    { name: "Экскурсии", path: "/tours", icon: "Users" },
    { name: "События", path: "/events", icon: "Calendar" },
    { name: "Контакты", path: "/contacts", icon: "MapPin" },
    { name: "Билеты", path: "/tickets", icon: "Ticket" },
    { name: "Личный кабинет", path: "/profile", icon: "User" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center">
              <Icon name="TreePine" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">
                Оренбургский зоопарк
              </h1>
              <p className="text-sm text-green-600">Мир дикой природы</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-green-100 text-green-800"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700"
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
            className="lg:hidden p-2 rounded-lg hover:bg-green-50"
          >
            <Icon
              name={isOpen ? "X" : "Menu"}
              size={24}
              className="text-green-800"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-green-100 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-green-100 text-green-800"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-700"
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
  );
};

export default Navigation;
