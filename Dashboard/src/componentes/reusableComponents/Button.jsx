import React from "react";

const Button = ({
  disabled,
  action = () => {},
  icon,
  descripcion,
  children,
  text,
  primary,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={`main font-primary w-50 flex items-center justify-center border border-gray-300 rounded text-blue-600 p-2 px-2 mx-2
        ${disabled ? "opacity-50" : ""}
        ${primary ? "bg-[#5F65F6] text-white" : "bg-white"}
        `}>
      {icon && <span className="mr-2">{icon}</span>}
      {descripcion && <p>{descripcion}</p>}
      {(children && children) || text}
    </button>
  );
};

export default Button;
