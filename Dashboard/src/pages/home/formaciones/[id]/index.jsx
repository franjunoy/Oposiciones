import SideBar from '@/componentes/SideBar/SideBar';
import Header from '@/componentes/Header/Header';
import { useState, useEffect, useRef } from 'react';
import Menu from '@/componentes/reusableComponents/Menu';
import Reports from '@/componentes/Reports/Reports';
import ListInput from '@/componentes/reusableComponents/ListInput';
import { useRouter } from 'next/router';
import {getCursoId} from '@/peticiones/dashboard';

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

const PagePrincipal = () => {


  const [showNavMenu, setShowNavMenu] = useState(false);
  const [formationData, setFormationData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const detectarCambiosRef = useRef(null);

  useEffect(() => {
    if (id) {
      localStorage.setItem('cursoId', id);
    }

    const storedId = localStorage.getItem('cursoId');
    if (storedId) {
      getCursoId({
        id: storedId,
        success: (dataRecibida) => {
          setFormationData(dataRecibida.payload);
          detectarCambiosRef.current = JSON.parse(JSON.stringify(dataRecibida.payload)); // Copia profunda
        },
        loading: (isLoading) => setIsLoading(isLoading),
        error: (error) => setError(error.response)
      });
    }
  }, [id, getCursoId]);

 
  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
   

  return (
    <div className='App__general__container relative '>
      <main className='font-primary flex flex-col h-full '>
        <Header handleShowNavMenu={handleShowNavMenu} />
        
        <section className='flex h-full flex-row  bg-[#E4E7F4]'>
          <SideBar showNavMenu={showNavMenu} />

          <div className='statistics__&&__reports__general__container w-full h-full flex flex-col rounded-l-3xl bg-white py-8 px-4 pr-8  shadow-2xl drop-shadow-2xl'>
            
            <div className=' text-left text-indigo-500/80 text-xl ml-4 font-semibold'>
              Formación
            </div>
            <h2 className='font-semibold text-base ml-4 mt-2'>
              {formationData?.nombre}
            </h2>

            <Reports reportsFakeData={reportsFakeData} />

            <div className='mt-8'>              
              <Menu
                detectarCambiosRef={detectarCambiosRef}
                formationData={formationData}    
              />              
            </div>

            <ListInput                          
              data={formationData}
              detectarCambiosRef={detectarCambiosRef}
              formationData={formationData}
            />

          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default PagePrincipal;
