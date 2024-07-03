import { generateQuizlet, getAllDocuments } from "@/peticiones/ia";
import { useEffect, useState } from "react";
import  DocumentSelector from "./QuizletComponent.jsx/DocumentSelector";
import { QuizletResult } from "./QuizletComponent.jsx/ResultQuizlet";
import { createQuizletToTheme } from "@/peticiones/dashboard";
import { useModal } from "@/context/ModalContext";



export const GenerateQuizlet = ({ select, themeId }) => {
    
    const [options, setOptions] = useState([]);
    const [fileSelected, setFileSelected] = useState("");
    const [quizlet, setQuizlet] = useState(null);
    const [loading, setLoading] = useState(false);
    const { closeModal } = useModal()

    useEffect(() => {
        getAllDocuments({
            themeId,
            success: (a) => setOptions(a.payload),
            error: (a) => console.log(a),
            loading: (a) => setLoading(a),
        });
    }, [themeId]);

    const handleSubmit = async () => {
        setLoading(true);
        await generateQuizlet({
            themeId,
            docId: fileSelected,
            success: (a) => {
                setQuizlet(a.payload);
                setFileSelected("");
                setLoading(false);
            },
            error: (a) => {
                console.log(a);
                setLoading(false);
            },
            loading: (a) => setLoading(a),
        });
    };

    const handleCreateQuizlet = () => {
        setLoading(true)
        createQuizletToTheme({
            success: (response) => {
                console.log(response)
                closeModal()
            },
            loading: (onLoad) => setLoading(onLoad),
            error: (error) => console.log(error),
            themeId,
            quizlet
        })
    }

    return (
        <div className=" main flex flex-col items-center justify-center ">
            <h2 className="label font-primary font-semibold text-lg mb-6">Generar Quizlet</h2>
            
            <div className="p-4  ">
                {!loading && !quizlet && (
                    <DocumentSelector
                        options={options}
                        fileSelected={fileSelected}
                        setFileSelected={setFileSelected}
                        handleSubmit={handleSubmit}
                    />
                )}

                {loading && <Loading />}
                {!loading && quizlet && <QuizletResult quizlet={quizlet} handleCreateQuizlet={handleCreateQuizlet} />}

            </div>

        </div>
    );
};



const Loading = () => (
    <div className=" bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <p className="text-white text-lg">Generando Quizlet...</p>
    </div>
);

