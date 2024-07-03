import { udploadFileinTheme } from "@/peticiones/ia";
import { useState, useEffect } from "react";
import Button from "../reusableComponents/Button";
import { getAllDocuments } from "@/peticiones/ia";
import { useModal } from "@/context/ModalContext";

export const UpdateInfo = ({ select, options, themeId }) => {
  
  const [selectedOption, setSelectedOption] = useState('');
  const [previusOptions, setPreviusOptions] = useState(null)
  const [file, setFile] = useState(null);
  const { closeModal } = useModal()
  

  useEffect(() => {
    getAllDocuments({
        themeId,
        success: (a) => setPreviusOptions(a.payload),
        error: (a) => console.log(a),
        loading: (a) => console.log(a),
    });
}, [themeId]);
  
  
  const handleSubmit = () => {
    if (file && file.type === "application/pdf") {
      udploadFileinTheme({
        themeId: themeId,
        file: file,
        description: "asdas",
        success: (a) => {alert("Subido exitosamente"), closeModal()},
        error: (a) => console.log(a),
        loading: (a) => console.log(a)
      });
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className=" main flex flex-col items-center justify-center ">
      
      <h2 className="label font-primary font-semibold text-lg mb-4">Agregar informacion al bot de IA</h2>
      <div className="p-4">
        
        
        {select && (
          <>
            <label className="label mb-2">Selecciona un tema</label>
            <select
              className=" w-full p-2 mb-4 border border-gray-300 rounded"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options && options.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </>
        )}
        
        <p className="label font-primary text-sm ">Subir información en formato PDF. </p>
        <p className="label font-primary text-sm mb-4 ">Esta documentacion se utilizara para generar los Quizlet. </p>

        {previusOptions && 
          <div className="previusOptions flex flex-col border border-gray-300 p-4 rounded-lg  ">
            <div className="label font-primary text-sm mb-2">Documentos cargados previamente en el tema</div>  
              {  previusOptions.map((opt, index) => {
                return (
                  <li className="opt font-primary text-xs" key={index}>{opt.fileName} </li>
                )
              })
              }
          </div>
        }

        <div className="ingresar flex flex-row justify-center items-center w-full mb-11 mt-6 border border-gray-300 px-5 py-6 rounded-lg font-primary ">
          <input
            type="file"
            accept="application/pdf"            
            onChange={(e) => setFile(e.target.files[0])}            
            />
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
              descripcion={'Subir'}
              primary={true}
            />
          </div>  
        </div>
      </div>

    </div>
  );
};
