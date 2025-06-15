import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Icon from "./ui/icon";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-green-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Адрес
              </h3>
              <p className="text-green-100">
                г. Оренбург, ул. Парковая, 32
                <br />
                Парк им. Перовского
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Время работы
              </h3>
              <p className="text-green-100">
                Ежедневно: 9:00 - 18:00
                <br />
                Касса до 17:30
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h3>
              <p className="text-green-100">
                +7 (3532) 77-25-82
                <br />
                info@orenburg-zoo.ru
              </p>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>
              &copy; 2024 Оренбургский городской зоопарк. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
