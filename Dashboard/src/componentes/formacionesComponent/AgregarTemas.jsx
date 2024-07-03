import FormationForm from "../FormationForm/FormationForm"
import ModulesView from "../ModulesView/ModulesView"
import useFormacion from "@/hooks/useFormacion"
import { putTemas } from "@/peticiones/dashboard"
import { useModal } from "@/context/ModalContext"
import { useRef } from "react"


const AgregarTemas = ({index, formationData, detectarCambios}) => {

    const { closeModal } = useModal()

    const {
        formacion,
        updateFormacion,
        updateModulo,
        updateTema,
        handleAddModule,
        addTema
    } = useFormacion(formationData);

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
            <ModulesView modulos={[formacion.modulos[index]]} moduloActual={index} allModulos={formacion.modulos}  addTema={true} updateFormacion={updateFormacion}  />
            <FormationForm 
            onSubmit={handleGuardarFormacion}
            updateFormacion={updateFormacion}
            updateModulo={updateModulo}
            updateTema={updateTema}
            handleAddModule={handleAddModule}
            formacion={formacion} 
            actulizarTemas={index}
            addTema={addTema} 
            index={index}
            detectarCambios={detectarCambios.current}
        />
      </div>
    )
}

export default AgregarTemas