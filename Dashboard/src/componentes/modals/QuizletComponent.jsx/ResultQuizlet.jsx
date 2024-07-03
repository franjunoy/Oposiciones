import Button from "@/componentes/reusableComponents/Button"
import { useModal } from "@/context/ModalContext"

export const QuizletResult = ({ quizlet, handleCreateQuizlet }) => {
    
    const { closeModal } = useModal()

    return(
    
    <div className="flex flex-col p-4 font-primary  ">
        
        <section className="respuestaIA flex flex-col max-w-2xl mx-auto ">
            <p className="label font-medium mb-1 font-primary mt-2">Pregunta</p>
            <p className="label text-sm font-normal font-primary">{quizlet.pregunta}</p>
            <p className="label px-2 font-medium mb-1 font-primary mt-4 text-sm">Respuesta 1</p>
            <p className="label px-2 text-green-600 font-medium text-sm">{quizlet.respuesta}</p>
            <p className="label px-2 font-medium mb-1 font-primary mt-2 text-sm">Respuesta 2</p>
            <p className="label px-2 text-red-600 text-sm">{quizlet.respuestafalsa}</p>
            <p className="label px-2 font-medium mb-1 font-primary mt-2 text-sm">Respuesta 3</p>
            <p className="label px-2 text-red-600 text-sm">{quizlet.respuestafalsa2}</p>
            <p className="label font-medium mb-1 font-primary mt-8">Justificacion de respuesta</p>
            <p className="label text-sm font-normal font-primary">{quizlet.explicacion}</p>
        </section>

        <div className="botones flex flex-row gap-x-2 mt-10">
                <div className="cancel flex-1 flex justify-center items-center">
                    <Button
                        action={closeModal}
                        descripcion={'Cancel'}                
                        />
                </div>  
                <div className="cancel flex-1 flex justify-center items-center">
                    <Button
                        action={handleCreateQuizlet}
                        primary={true}
                        descripcion={'Publicar'}
                        />
                </div>  
            </div>
    </div>
)

}