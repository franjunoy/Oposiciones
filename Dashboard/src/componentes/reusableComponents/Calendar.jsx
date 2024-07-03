import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import Button from "./Button";
// import 'react-calendar/dist/Calendar.css'
// import "@/styles/calendar.module.css"

const Calendario = ({ setFilterDates, setCalendarOpen }) => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setFilterDates(value);
  }, [value]);

  // const minDetail = "month"; // limita la vista a un mes
  // const maxDetail = "month"; // limita la vista a un mes para q no se vean decadas y siglos

  // console.log('vlaue', value)

  return (
    <section className="font-lato h-[390px] border px-4 py-6 border-stone-300 bg-white flex flex-col justify-between">
      <Calendar
        value={value}
        onChange={onChange}
        className="react-calendar" //estilos definidos en archivo tailwind.css
        selectRange
        // minDetail={minDetail}
        // maxDetail={maxDetail}
      />
      
      <span className="border border-zinc-100 w-full flex flex-col mb-3"></span>
      <article className="flex flex-row gap-2 w-full">
        <Button
          descripcion={"Cancelar"}
          variant={"primary-alt"}
          action={() => setCalendarOpen(false)}
          customStyle={"px-2 py-2 font-semibold text-sm rounded leading-[30px]"}
        />
        <Button
          descripcion={"Aplicar"}
          variant={"primary"}
          customStyle={"px-2 py-2 font-semibold text-sm rounded leading-[30px]"}
        />
      </article>
     
    </section>
  );
};

export default Calendario;
