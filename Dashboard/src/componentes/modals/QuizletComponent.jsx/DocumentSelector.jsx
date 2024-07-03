import Button from "@/componentes/reusableComponents/Button";
import { useModal } from "@/context/ModalContext";


const DocumentSelector = ({ options, fileSelected, setFileSelected, handleSubmit }) => {
   
    const { closeModal } = useModal()
    
    return(
        <>
            <div className="label font-primary text-sm mb-4">Selecciona un documento en el tema para generar el Quizlet.</div>

            <div className="seleccionar mb-5 flex justify-center items-center font-primary">
                {options.length > 0 ? (
                    <select
                        className=" w-full p-2 border hover:cursor-pointer border-gray-300 rounded"
                        value={fileSelected}
                        onChange={(e) => setFileSelected(e.target.value)}
                        
                    >
                        <option value="" disabled>
                            Selecciona un documento
                        </option>
                        {options.map((ele, index) => (
                            <option key={index} value={ele.fileId}>
                                {ele.fileName}
                            </option>
                        ))}
                    </select>
                ) : (
                    <div className="flex flex-col text-sm justify-center items-center">

                    <p>No hay documentos disponibles </p>
                    <p>vuelve el tema y agrega informacion</p>
                    </div>
                )}
            </div>

            <div className="dificultad flex flex-row gap-x-4 items-center mb-11">
                <p>Dificultad:</p>
                <div className="colorDificultad bg-red-500 h-4 w-4 rounded-full hover:cursor-pointer"/>
                <div className="colorDificultad bg-yellow-500 h-4 w-4 rounded-full hover:cursor-pointer"/>
                <div className="colorDificultad bg-green-500 h-4 w-4 rounded-full hover:cursor-pointer"/>  
            </div>
           
            <div className="botones flex flex-row gap-x-2">
                <div className="cancel flex-1 flex justify-center items-center">
                    <Button
                        action={closeModal}
                        descripcion={'Cancel'}                
                        />
                </div>  
                <div className="cancel flex-1 flex justify-center items-center">
                    <Button
                        action={handleSubmit}
                        disabled={!fileSelected}
                        primary={true}
                        descripcion={'Generar con IA'}
                        />
                </div>  
            </div>
            
        </>
    )
}

export default DocumentSelector
