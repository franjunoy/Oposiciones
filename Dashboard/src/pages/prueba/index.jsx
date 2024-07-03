import React, { useState, useEffect } from 'react';
import CustomToggle from '../../componentes/reusableComponents/CustomToggle';
import Desplegable from '../../componentes/reusableComponents/Desplegable';
import Button from '../../componentes/reusableComponents/Button';
import {getCursoId} from '@/peticiones/dashboard';
import { useModal } from '@/context/ModalContext';
import FormationForm from '../../componentes/FormationForm/FormationForm';
import useFormacion from '@/hooks/useFormacion';
import SideBar from '@/componentes/SideBar/SideBar';
import Header from '@/componentes/Header/Header';
import Menu from '@/componentes/reusableComponents/Menu';
import Reports from '@/componentes/Reports/Reports';
import { useRouter } from 'next/router';

const QuizletInput = ({ title, title2 }) => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [formationData, setFormationData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const { openModal } = useModal();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [formaciones, setFormaciones] = useState(false);
  const [modulos, setModulos] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const listInputsFormacion = [
    {
      titleFormacion:
        'Cuerpo Especial de Instituciones Penitenciarias. Acceso Libre'
    }
  ];

  const reportsFakeData = {
    reports: [
      {
        reportTitle: 'ExampleTitle',
        reportDescription: 'exampleDescription'
      },
      {
        reportTitle: 'ExampleTitle2',
        reportDescription: 'exampleDescription2'
      },
      {
        reportTitle: 'ExampleTitle3',
        reportDescription: 'exampleDescription3'
      },
      {
        reportTitle: 'ExampleTitle4',
        reportDescription: 'exampleDescription4'
      },
      {
        reportTitle: 'ExampleTitle5',
        reportDescription: 'exampleDescription5'
      }
    ],
    button: {
      state: true
    }
  };

  const toggleDropdown = (modulo) => {};

  const handleOpenFormatioFormModal = () => {
    openModal();
  };

  return (
    <div className='App__general__container relative '>
      <main className='font-primary flex flex-col h-full '>
        <Header handleShowNavMenu={handleShowNavMenu} />
        <section className='flex h-full flex-row  bg-[#E4E7F4]'>
          <SideBar showNavMenu={showNavMenu} />
          <div className='statistics__&&__reports__general__container w-full h-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8  shadow-2xl drop-shadow-2xl'>
            <div className='  text-left text-indigo-500/80 text-xl ml-4 font-semibold'>
              Cursos
            </div>
            <h2 className='font-semibold text-base ml-4 mt-2'>
              Cuerpo de Ayudantes de Instituciones Penitenciarias
            </h2>
            <h3 className='font-semibold text-base ml-4'> Modulo 3 Tema 1</h3>

            <div class='flex items-center mt-16'>
              <h1 class='ml-4 mr-20 font-lato text-black text-base font-bold'>
                Quizlets
              </h1>
              <Button>{'Crear nuevo'}</Button>
            </div>

            <div class='mt-4'>
              <div className='flex justify-between w-1120 px-4 py-2 border-t border-gray-300'>
                <h1 className='font-lato text-black text-base '>{'Quizlet'}</h1>
                <div className='flex items-center space-x-4'>
                  <Button>{'Actualizar preguntas IA'}</Button>
                  <Button>{'Ver  Quizlet'}</Button>
                  <Button>{'Agregar informacion'}</Button>
                  <Button>{'Ver resumen pdf'}</Button>
                  <div className='relative'>
                    <CustomToggle
                      onToggle={() => toggleDropdown()}
                      value={dropdownStates['quizlet'] || false}
                    />
                  </div>
                </div>
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
