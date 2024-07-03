import React from 'react';
import Button from './Button';

const ComponetRecursos = ({ numero }) => {
  return (
    <article className='flex flex-col w-full pr-3 pl-3 pb-2 pt-2 gap-5 md:gap-6 '>
      <section className='main flex justify-between items-center text-center border border-gray-300 p-4'>
        <div className='flex items-center'>
          <div className='p-1 py-3'>
            <span className='text-indigo-500 font-bold text-[42px]'>
              {numero}
            </span>
          </div>
          <div className='p-1 py-5 ml-8'>
            <span className='text-black font-bold text-[16px]'>Reportes</span>
            <p className='text-xs text-gray-500 font-bold'>
              Revisa los reportes de tarjetas.
            </p>
          </div>
        </div>
        <div className='p-1 py-6'>
          <Button className='text-xs text-gray-500 font-bold'>
            Revisar reportes
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ComponetRecursos;
