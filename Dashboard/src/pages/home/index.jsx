import styles from "./styles.module.css";
import SideBar from "@/componentes/SideBar/SideBar";
import Header from "@/componentes/Header/Header";
import Statistics from "@/componentes/Statistics/Statistics";
import Reports from "@/componentes/Reports/Reports";
import FormationsList from "@/componentes/FormationsList/FormationsList";
import { useState } from "react";

const PagePrincipal = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const statisticsFakeData = {
    students: {
      totalStudents: 253,
      lastDayActiveStudents: 52,
      trialPeriod: 5,
    },
    formations: {
      totalFormations: 5,
    },
  };

  const reportsFakeData = {
    reports: [
      {
        reportTitle: "ExampleTitle",
        reportDescription: "exampleDescription",
      },
      {
        reportTitle: "ExampleTitle2",
        reportDescription: "exampleDescription2",
      },
      {
        reportTitle: "ExampleTitle3",
        reportDescription: "exampleDescription3",
      },
      {
        reportTitle: "ExampleTitle4",
        reportDescription: "exampleDescription4",
      },
      {
        reportTitle: "ExampleTitle5",
        reportDescription: "exampleDescription5",
      },
    ],
    button: {
      state: true,
    },
  };

  return (
    <div className="App__general__container   ">
      {/* HEADER ======================================= */}
      <main className="font-primary flex flex-col h-full ">
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className="flex h-full flex-row  bg-[#E4E7F4]">
          {/* SIDE BAR ======================================= */}
          <SideBar showNavMenu={showNavMenu} />

          <div
            className={`statistics__&&__reports__general__container w-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8  shadow-2xl drop-shadow-2xl `}>
            <div className=" text-left text-indigo-500/80 text-xl ml-4 font-semibold">
              Inicio
            </div>

            {/* STATISTICS ======================================= */}
            <Statistics
              title={"últimos 30 días"}
              statisticsFakeData={statisticsFakeData}
            />

            {/* REPORTS ======================================= */}
            <Reports reportsFakeData={reportsFakeData} />

            {/* FORMATIONS LIST ======================================= */}
            <FormationsList />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default PagePrincipal;
