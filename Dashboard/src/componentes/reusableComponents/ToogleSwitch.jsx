import { useState } from "react";

const ToogleSwitch = ({ value, onToggle }) => {

  const handleToggle = () => {
    onToggle()
  };
  return (
    <button onClick={handleToggle} className="flex items-center justify-left">
      <label htmlFor="switch" className="flex items-center cursor-pointer">
        <div className="relative">
          <div className={`block ${value ? "bg-indigo-950" : "bg-[#D6D9D8]"} w-9 h-5 rounded-full`}></div>
          <div className={`dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition transform ${value ? 'translate-x-4' : 'translate-x-0'}`}></div>
        </div>
      </label>
    </button>
  )
}
export default ToogleSwitch