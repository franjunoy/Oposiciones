import React from 'react';
import Button from './Button';
import AgregarModulo from '../formacionesComponent/AgregarModulo';
import { useModal } from '@/context/ModalContext';

const Menu = ({formationData, detectarCambiosRef}) => {

  const { openModal } = useModal()    
  
  const handleOpenFormatioFormModal = () => {
    openModal(<AgregarModulo formationData={formationData} detectarCambios={detectarCambiosRef.current}/>);
  };

  return (
    <div>    
      <div className='flex items-center mb-4'>
        <div className='w-[77px] h-[22px] text-[18px] font-lato font-bold text-black'>
          {'Modulos'}
        </div>
        <div className='ml-16'>
          <Button 
            className='w-[113px] h-[32px] text-[13px] text-[#5A6ACF]'
            action={()=> handleOpenFormatioFormModal()}
            descripcion={'Añadir modulo'}
            >
          </Button>
        </div>
      </div>
    </div>    
  );
};

export default Menu;
