import FormationForm from "../FormationForm/FormationForm"
import ModulesView from "../ModulesView/ModulesView"
import useFormacion from "@/hooks/useFormacion"
import { putTemas } from "@/peticiones/dashboard"
import { useModal } from "@/context/ModalContext"
import { useEffect } from "react"


const AgregarModulo = ({ formationData, detectarCambios}) => {

    const { closeModal } = useModal()

    const {
        formacion,
        updateFormacion,
        updateModulo,
        updateTema,
        handleAddModule,        
    } = useFormacion(formationData);

    useEffect( () => {
      handleAddModule()
      return () => {
        if (formacion.modulos[formacion.modulos.length - 1].nombreModulo === '') formacion.modulos.pop()
      }
    },[])

    const handleGuardarFormacion = (formacion) => {   
        
        const moduloActualizar = formacion.modulos[index]       
        putTemas({
          success: (v) => {
            console.log(v);  
            closeModal()          
          },
          loading: (l) => console.log('cargando', l),
          error: (e) => console.log('error', e),
          moduloActualizar
        });
    };

    return (
        <div className='modificarTemas flex flex-row gap-x-6 '>
          <ModulesView modulos={formacion.modulos} updateFormacion={updateFormacion} addModulo={true}  />
          <FormationForm 
            onSubmit={handleGuardarFormacion}
            updateFormacion={updateFormacion}
            updateModulo={updateModulo}
            updateTema={updateTema}
            handleAddModule={handleAddModule}
            formacion={formacion} 
            detectarCambios={detectarCambios}
            addModulo={true}
          />
      </div>
    )
}

export default AgregarModulo