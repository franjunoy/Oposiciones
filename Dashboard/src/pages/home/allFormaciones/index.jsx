import { useState } from "react";
import Header from "@/componentes/Header/Header";
import SideBar from "@/componentes/SideBar/SideBar";
import FormationCardReu from "@/componentes/formacionesComponent/FormationCardReu";
import { useSelector } from "react-redux";
import Button from "@/componentes/reusableComponents/Button";

const PageFormations = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const formations = useSelector((state) => state.userReducer.formations);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div className="App__general__container">
      <main className="font-primary flex flex-col h-full w-full">
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className="flex h-full flex-row bg-[#E4E7F4]">
          <SideBar showNavMenu={showNavMenu} />
          <div
            className={`statistics__&&__reports__general__container w-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8 shadow-2xl drop-shadow-2xl`}>
            <div className="text-left text-indigo-500/80 text-xl ml-4 mb-16 font-semibold">
              Formaciones
            </div>
            <div className="flex justify-end items-center mb-12 border-b-2 pb-4 border-gray-300">
              <div>
                <Button text={"Crear formación"} />
              </div>
            </div>
            <div
              className="font-primary flex flex-wrap flex-col md:flex-row mx-6"
              style={{ minHeight: "calc(100vh - 320px)" }} // Adjust height based on header, footer, and other elements
            >
              {formations?.map((formation, i) => (
                <FormationCardReu key={i} formation={formation} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default PageFormations;
