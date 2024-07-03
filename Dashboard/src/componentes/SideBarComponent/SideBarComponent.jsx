import React from "react";
import { useRouter } from "next/router";

const SideBarComponent = ({ ...props }) => {
  const { title, subMenus, icons } = props;
  const route = useRouter();

  const getIcon = (subMenu) => {
    if (subMenu === "Inicio") return icons[0];
    if (subMenu === "Formaciones") return icons[1];
    if (subMenu === "Configuraciones") return icons[2];
    if (subMenu === "Pagos") return icons[3];
    if (subMenu === "Cuentas") return icons[4];
    if (subMenu === "Ayuda") return icons[5];
  };

  return (
    <ul className="flex w-full flex-col gap-3  ">
      <h3 className="text-gray-600 font-semibold ml-3">{title}</h3>
      {subMenus.map((subMenu, index) => (
        <li
          key={index}
          className="flex w-full  items-center gap-2 ml-3 text-gray-500 ">
          <figure>
            <img src={getIcon(subMenu)} alt="Icon" aria-label="icon" />
          </figure>
          <button
            className=" hover:text-indigo-600 hover:scale-110 transition duration-300"
            onClick={() => {
              if (subMenu === "Inicio") route.push("/home");
              if (subMenu === "Formaciones") route.push("/home/allFormaciones");
            }}>
            {subMenu}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SideBarComponent;
