import React from 'react';
import Button from './Button';
import { useRouter } from 'next/router';
import { useModal } from '@/context/ModalContext';
import { UpdateInfo } from '../modals/UpdateInfo';
import { GenerateQuizlet } from '../modals/GenerateQuizlet';

const Desplegable = ({ selected }) => {
  
  const router = useRouter();
  const { openModal } = useModal()

  const handleViewReports = (tema) => {
    router.push({
      pathname: `/home/formaciones/${selected._id}/preguntas`,
      query: {
        modulos: JSON.stringify(selected),
        tema: JSON.stringify(tema),
        temas: JSON.stringify(selected.temas),        
      }
    });
  };

  const updateInfoModal = (temaId) => {
    openModal(<UpdateInfo select={false}  themeId={temaId} />);
  };
  const generateQuizletHandler = (temaId) => {
    openModal(<GenerateQuizlet select={false}  themeId={temaId}/>);
  };

  return (
    <div className='flex justify-center items-center h-full border-t border-gray-300'>
      <div className='overflow-x-auto'>
        <table>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'>
                Temas
              </th>
            
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'>
                Quizlet totales
              </th>
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'>
                Última modificación
              </th>
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'>
                Última actualización
              </th>
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'>
                Alumnos cursando
              </th>
              <th className='py-2 px-4 border-b text-center font-lato text-[#5D5FEF]'></th>
            </tr>
          </thead>
          <tbody>
            {selected?.temas?.map((tema, index) => {
              return (
                <tr key={index}>
                  <td className='py-2 px-4 border-b text-center'>
                    {tema.nombre}
                  </td>
                  <td className='py-2 px-4 border-b text-center'>
                    {tema?.preguntas?.length}
                  </td>
                  <td className='py-2 px-4 border-b text-center'>
                    {tema.createdAt}
                  </td>
                  <td className='py-2 px-4 border-b text-center'>
                    {tema.updatedAt}
                  </td>
                  <td className='py-2 px-4 border-b text-center'>
                    {tema.alumnosCursando.length}
                  </td>
                  <td className='py-2 px-4 flex flex-row gap-2 '>
                    
                    <div className='boton flex-1'>
                      <Button action={() => handleViewReports(tema)} descripcion={'Gestionar'}/>
                    </div>
                    <div className='boton flex-1'>
                      <Button action={()=> {updateInfoModal(tema._id)}} descripcion={'Agregar informacion'} />
                    </div>
                    <div className='boton flex-1'>
                      <Button action={()=> {generateQuizletHandler(tema._id)}} descripcion={'Generar Quizlet'}/>
                    </div>
                    
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Desplegable;
