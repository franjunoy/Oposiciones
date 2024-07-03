import React, { useState, useEffect } from 'react';
import CustomToggle from '../../../../../componentes/reusableComponents/CustomToggle';
import Button from '../../../../../componentes/reusableComponents/Button';
import { useModal } from '@/context/ModalContext';
import SideBar from '@/componentes/SideBar/SideBar';
import Header from '@/componentes/Header/Header';
import { useRouter } from 'next/router';
import { getQuizletId } from '@/peticiones/dashboard';

const QuizletInput = () => {

  const [dropdownStates, setDropdownStates] = useState({});
  const [selectedData, setSelectedData] = useState({});
  const { openModal } = useModal();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const router = useRouter();
  const [modulos, setModulos] = useState([]);
  const [tema, setTema] = useState(null);
  const [temas, setTemas] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (router.query.tema) {
      setTema(JSON.parse(router.query.tema));
    }
    if (router.query.temas) {
      setTemas(JSON.parse(router.query.temas));
    }
    if (router.query.modulos) {
      setModulos(JSON.parse(router.query.modulos));
    }
    if (router.query.data) {
      setData(JSON.parse(router.query.data));
    }
  }, [router.query]);

  // console.log('tema', tema);
  // console.log('temas', temas);
  console.log('modulos', modulos);
  // console.log('dropdownStates', dropdownStates);

  const handleURLUpdate = (newParams) => {
    const updatedQuery = {
      ...router.query,
      ...newParams
    };
    router.push(
      {
        pathname: router.pathname,
        query: updatedQuery
      },
      undefined,
      { shallow: true }
    );
  };

  
  const toggleDropdown = (preguntaId) => {
    
    const updatedDropdownStates = { ...dropdownStates };
    updatedDropdownStates[preguntaId] = !updatedDropdownStates[preguntaId];
    setDropdownStates(updatedDropdownStates);    

    if(!selectedData[preguntaId]) {
      setLoading(true)
      getQuizletId({
        success: (response) => {
          console.log('entro')
          setSelectedData({
            ...selectedData,
            [preguntaId]: response.payload
          })
        },
        loading: (load) => setLoading(load),
        error: (error) => console.log(error),
        id: preguntaId 
      })
    }
  };

  const handleOpenFormatioFormModal = () => {
    openModal();
  };

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div className='App__general__container relative '>
      <main className='font-primary flex flex-col h-full '>
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className='flex h-full flex-row  bg-[#E4E7F4]'>
          <SideBar showNavMenu={showNavMenu} />
          <div className='statistics__&&__reports__general__container w-full h-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8 shadow-2xl drop-shadow-2xl'>
            <div className='text-left text-indigo-500/80 text-xl ml-4 font-semibold'>
              Formación
            </div>
            <h2 className='font-semibold text-base ml-4 mt-2'>
              {data?.nombre}
            </h2>
            <h3 className='font-semibold text-base ml-4'>
              {modulos?.nombre} - {tema?.nombre}
            </h3>

            <div className='flex items-center mt-16'>
              <h1 className='ml-4 mr-20 font-lato text-black text-base font-bold'>
                Quizlets
              </h1>
              <div>
                <Button>{'Crear nuevo'}</Button>
              </div>
            </div>

            <div className='mt-4'>
              <div>
                {tema?.preguntas?.map((preguntaId, index) => (
                  <div key={index}>
                    <div className='flex flex-col md:flex-row justify-between w-full px-4 py-4 border-t border-gray-300'>
                      <h1 className='font-lato text-black text-base mb-2 md:mb-0'>
                        {`Quizlet ${index + 1}`}
                      </h1>
                      <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
                        <div>
                          <Button>{'Ver Quizlet'}</Button>
                        </div>
                        <div>
                          <Button>{'Agregar informacion'}</Button>
                        </div>
                        <div>
                          <Button>{'Ver resumen pdf'}</Button>
                        </div>
                        <div className='relative'>
                          <CustomToggle
                            onToggle={() => toggleDropdown(preguntaId)}
                            value={dropdownStates[preguntaId] || false}
                          />
                        </div>
                      </div>
                    </div>
                    {dropdownStates[preguntaId] && (
                      <div className=' items-center h-full pb-4 mb-3 border-gray-300 font-primary border rounded-md shadow-md shadow-black'>
                      
                        <div className='flex justify-between py-2 px-4 font-primary text-[#5D5FEF]'>
                          <h1>{selectedData[preguntaId]?.pregunta}</h1>
                          <div className='flex space-x-4'>
                            <Button>{'Editar'}</Button>
                            <Button>{'Eliminar'}</Button>
                          </div>
                        </div>
                        
                        <div className='respuestas flex flex-col px-4'>
                          <li className='label mb-2 font-primary text-green-500'>
                            {selectedData[preguntaId]?.respuesta}
                          </li>
                          <li className='label mb-2 font-primary text-red-500'>
                            {selectedData[preguntaId]?.respuestaFallida1}
                          </li>                              
                          <li className='label mb-2 font-primary text-red-500'>
                            {selectedData[preguntaId]?.respuestaFallida2}
                          </li>
                        </div>

                        <div className='explicacion flex px-4 pt-2'>
                          {selectedData[preguntaId]?.iaResumen}
                        </div>    

                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default QuizletInput;
