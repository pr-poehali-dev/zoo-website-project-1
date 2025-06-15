import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Icon from "./ui/icon";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-teal-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                ООО "МиоМед"
              </h3>
              <p className="text-blue-100">
                г. Оренбург, ул. Орская, 174 А
                <br />
                Медицинское оборудование и расходные материалы
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Время работы
              </h3>
              <p className="text-blue-100">
                пн-пт: 9:00 - 18:00
                <br />
                сб-вс: выходные
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h3>
              <p className="text-blue-100">
                +7 (3532) 56-98-66
                <br />
                info@miomed-orenburg.ru
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 ООО "МиоМед". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
