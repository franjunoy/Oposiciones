import React from "react";
import SideBarComponent from "../SideBarComponent/SideBarComponent";

const SideBar = ({ showNavMenu }) => {
  const subMenusOne = ["Inicio", "Formaciones"];
  const subMenusTwo = ["Configuraciones", "Pagos", "Cuentas", "Ayuda"];

  const icons = [
    "/sidebar-icons/Chart.svg",
    "/sidebar-icons/Chat.svg",
    "/sidebar-icons/Setting.svg",
    "/sidebar-icons/Wallet.svg",
    "/sidebar-icons/Profile.svg",
    "/sidebar-icons/Info Square.svg",
  ];

  return (
    <aside
      className={`w-full flex flex-col justify-between h-full  p-4 translate-x-[calc(-100%)] transform transition-transform  bg-[#E4E7F4] pb-8 ${
        showNavMenu && "translate-x-[calc(0%)] "
      }  md:max-w-56  md:justify-start md:pr-0  md:translate-x-0  `}>
      <div className="flex flex-1">
        <SideBarComponent title="Menu" subMenus={subMenusOne} icons={icons} />
      </div>
      <div className="flex flex-1 items-end">
        <SideBarComponent title="Otros" subMenus={subMenusTwo} icons={icons} />
      </div>
    </aside>
  );
};

export default SideBar;
