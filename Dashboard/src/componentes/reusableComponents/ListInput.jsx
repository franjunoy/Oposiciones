import React, { useState, useEffect, useRef } from 'react';
import CustomToggle from './CustomToggle';
import Desplegable from './Desplegable';
import Button from './Button';
import { useModal } from '@/context/ModalContext';
import AgregarTemas from '../formacionesComponent/AgregarTemas';
import Modal from './Modal';
import { UpdateInfo } from '../modals/updateinfo';
import { GenerateQuizlet } from '../modals/GenerateQuizlet';
import ToogleSwitch from './ToogleSwitch';

const ListInput = ({ data, detectarCambiosRef, formationData  }) => {
  
  const [dropdownStates, setDropdownStates] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const { openModal } = useModal();
  const toggleDropdown = (modulo) => {
    const updatedDropdownStates = { ...dropdownStates };
    updatedDropdownStates[modulo._id] = !updatedDropdownStates[modulo._id];
    setDropdownStates(updatedDropdownStates);
    setSelectedData({
      ...selectedData,
      [modulo._id]: updatedDropdownStates[modulo._id] ? modulo : null
    });
  };

 
  const handleOpenFormatioFormModal = (index) => {
    openModal(<AgregarTemas index={index} formationData={formationData} detectarCambios={detectarCambiosRef}/>);
  };

  

  return (
    <div className='main  '>      

      {formationData && formationData.modulos && (
        <div>

          {formationData.modulos.map((modulo, index) => (
            <div key={index}>
              <div className='flex justify-between w-full px-4 py-2 border-t border-gray-300'>
                <h1 className='font-lato text-black text-base font-bold'>
                  {modulo.nombre}
                </h1>
                <div className='flex items-center space-x-4 mr-4'>
                  
                  <div>
                    <Button
                      action={() => handleOpenFormatioFormModal(index)}
                      descripcion={'Añadir tema'}
                    />
                  </div>
                  <div>
                    <Button>{'Ver reportes'}</Button>
                  </div>
                  <div>
                    <Button>{'Agregar informacion'}</Button>
                  </div>
                  <div className='relative'>
                    <CustomToggle
                      onToggle={() => toggleDropdown(modulo)}
                      value={dropdownStates[modulo._id] || false}
                    />
                  </div>

                </div>
              </div>
              <div className='desplegable max-h-80 overflow-auto'>
                {dropdownStates[modulo._id] && (
                  <Desplegable
                  selected={selectedData[modulo._id]}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}       
    </div>
  );
};

export default ListInput;
