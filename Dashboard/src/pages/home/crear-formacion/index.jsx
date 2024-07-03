import { useState, React } from "react";
import FormationForm from "@/componentes/FormationForm/FormationForm";
import ModulesView from "@/componentes/ModulesView/ModulesView";
import SideBar from "@/componentes/SideBar/SideBar";
import Header from "@/componentes/Header/Header";
import { createFormations } from "@/peticiones/dashboard";
import { useRouter } from "next/router";
import useFormacion from "@/hooks/useFormacion";

const CrearFormacion = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const router = useRouter();
  const {
    formacion,
    updateFormacion,
    updateModulo,
    updateTema,
    handleAddModule,
  } = useFormacion();

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const handleGuardarFormacion = (formacion) => {
    formacion.modulos.pop();
    createFormations({
      success: (v) => {
        console.log(v);
        router.push("/home");
      },
      loading: (l) => console.log("cargando", l),
      error: (e) => console.log("error", e),
      formacion,
    });
  };

  return (
    <div className="App__general__container  ">
      <main className="font-primary relative flex flex-col h-full 	">
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className="flex h-full flex-row  bg-[#E4E7F4]">
          <SideBar showNavMenu={showNavMenu} />

          <div className="formaciones__general__container  w-full flex flex-row rounded-l-3xl bg-white py-8 px-4 pr-8 shadow-2xl drop-shadow-2xl  ">
            <div className="flex flex-col w-full h-full">
              <h2 className="text-left text-indigo-500/80 text-xl ml-4 font-semibold mb-4">
                Crear nueva formación
              </h2>
              <ModulesView
                modulos={formacion.modulos}
                updateFormacion={updateFormacion}
              />
            </div>

            <div className="flex flex-row md:flex-row gap-5 w-full ">
              <FormationForm
                onSubmit={handleGuardarFormacion}
                updateFormacion={updateFormacion}
                updateModulo={updateModulo}
                updateTema={updateTema}
                handleAddModule={handleAddModule}
                formacion={formacion}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default CrearFormacion;
