import Header from "@/componentes/Header/Header";
import SideBar from "@/componentes/SideBar/SideBar";
import Button from "@/componentes/reusableComponents/Button";
import SelectSearch from "@/componentes/reusableComponents/SelectSearch";
import Table from "@/componentes/reusableComponents/Table";
import { useState } from "react";
import { useRouter } from "next/router";
import { useModal } from "@/context/ModalContext";
import InscribirAlumno from "@/componentes/modals/InscribirAlumno";
import { getAllAlumnos } from "@/peticiones/dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAlumnos } from "@/redux/reducer/userReducer";

const PageAlumnos = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [alumnosData, setAlumnosData] = useState(null);
  const [alumnosId, setAlumnosId] = useState(null);
  const [error, setError] = useState(null);
  const [cursoId, setCursoId] = useState(null);

  const dispatch = useDispatch();
  const { openModal } = useModal();
  const router = useRouter();
  const title = router.query.title;

  const handleModal = () => {
    openModal(<InscribirAlumno />);
  };

  useEffect(() => {
    getAllAlumnos({
      success: (data) => {
        setAlumnosData(data.payload);
        dispatch(setAlumnos(data.payload));
      },
      loading: (isLoading) => setIsLoading(isLoading),
      error: (error) => setError(error.response?.data),
    });
  }, []);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  console.log(cursoId, "CURSOIDD");
  return (
    <div className="App__general__container   ">
      <main className="font-primary flex flex-col h-full w-full ">
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className="flex h-full flex-row  bg-[##F9FAFC]">
          <SideBar showNavMenu={showNavMenu} />
          <div
            className={`statistics__&&__reports__general__container w-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8 shadow-2xl drop-shadow-2xl`}>
            <div className=" text-left text-indigo-500/80 text-xl ml-4 mb-16 font-semibold">
              {title} Gestion de alumnos
            </div>
            <div className="flex ml-[800px] w-80 h-10 boton ">
              <Button text={"Gestionar"} />
              <Button text={"Inscribir alumno"} action={() => handleModal()} />
            </div>

            <div className="font-primary flex flex-row justify-center items-center mx-2 bg-slate-100 w-2/3 p-8 mt-10 rounded-md ">
              <SelectSearch
                title={"Buscar por nombre"}
                placeholder={"Selecciona un alumno"}
                options={alumnosData}
                setValue={setCursoId}
                value={cursoId}
              />
              <div className="flex justify-center items-center mt-14">
                <Button text={"Buscar"} />
              </div>
            </div>
            <Table options={alumnosData} alumnoId={cursoId} />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default PageAlumnos;
