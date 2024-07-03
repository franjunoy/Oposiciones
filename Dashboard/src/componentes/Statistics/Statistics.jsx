const Statistics = ({ title, statisticsFakeData }) => {
  return (
    <article className="flex flex-col w-full pr-3 pl-3 pb-2 pt-2 gap-5 md:gap-6 ">
      <h3 className="font-semibold text-base">{title}</h3>

      <section className="main grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-y-6 gap-x-2 justify-items-center text-center border border-gray-300 shadow shadow-black">
        <div className="p-1 py-4 ">
          <span className="text-indigo-500 font-bold text-xl">
            {statisticsFakeData.students.totalStudents}
          </span>
          <p className="text-xs text-gray-500 font-bold">Alumnos totales</p>
        </div>

        <div className="p-1 py-4">
          <span className="text-indigo-500 font-bold text-xl">
            {statisticsFakeData.students.lastDayActiveStudents}
          </span>
          <p className="text-xs text-gray-500 font-bold">
            Alumnos activos en las ultimas 24 hs
          </p>
        </div>

        <div className="p-1 py-4">
          <span className="text-indigo-500 font-bold text-xl">
            {statisticsFakeData.formations.totalFormations}
          </span>
          <p className="text-xs text-gray-500 font-bold">Formaciones</p>
        </div>

        <div className="p-1 py-4">
          <span className="text-indigo-500 font-bold text-xl">
            {statisticsFakeData.students.trialPeriod}
          </span>
          <p className="text-xs text-gray-500 font-bold">
            Alumnos en periodo de prueba
          </p>
        </div>
      </section>
    </article>
  );
};

export default Statistics;
