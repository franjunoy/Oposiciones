import { useEffect, useState } from "react";
import Step_con_base from "../../../public/Step_con_base";
import Button from "../reusableComponents/Button";

const ModulesView = ({ modulos, updateFormacion, addTema, moduloActual, allModulos, addModulo }) => {

  
  const handleBorrarModulo = (index) => {
    if (modulos.length === 1) {
      updateFormacion('modulos', [
        {
          nombreModulo: '',
          descripcionModulo: '',
          temas: [
            {
              nombreTema: '',
              descripcionTema: '',
            },
          ],
        },
      ],)
    } else {
      updateFormacion('modulos', modulos.filter((_, i) => index !== i))
    }
  }

  const handleBorrarTema = (moduloIndex, temaIndex) => {

    // Hacer una copia del estado actual de los módulos
    const newModulos = ( addTema ? [...allModulos] : [...modulos] );
    
    // Filtrar los temas del módulo específico
    newModulos[moduloIndex].temas = newModulos[moduloIndex].temas.filter((_, i) => i !== temaIndex);

    
    // Si todos los temas del módulo han sido eliminados, restablecer el módulo a su estado inicial
    if (newModulos[moduloIndex].temas.length === 0) {
      newModulos[moduloIndex].temas = [{
        nombreTema: '',
        descripcionTema: '',
      }];
    }
  
    // Actualizar el estado de los módulos
    updateFormacion('modulos', newModulos);
  };

  return (
    <div className='sm:overflow-y-scroll pl-4 h-full w-[400px]'>
      <h2 className='mb-4 font-semibold'>{addTema ? 'Modificar temas de un módulo' : 'Módulos creados'}</h2>

      <div
        className={`modules__view__general__container ${
          modulos.length && 'overflow-x-scroll'
          } flex items-start md:flex-col md:justify-center md:overflow-x-hidden`
        }
        style={{
          scrollbarColor: '#8781e0 transparent',
          scrollbarWidth: 'thin',
        }}
      >
        {modulos[0]?.nombreModulo !== '' ?
          <div className="contenedorMap w-full">
            {modulos?.map((modulo, index) => (
              <div key={index} className='flex flex-col w-full '> 
                <div className="nombreModulo flex ">
                  {modulo?.nombreModulo === '' ?
                    null
                    :
                    <div className="modulo flex flex-row w-full gap-4 items-center ">
                      <div className='flex flex-row items-center '>
                        <Step_con_base />
                        <div className="label mx-2">Modulo: </div>
                        {modulo?.nombre ?
                         <div>{modulo?.nombre}</div>
                         :
                         <div>{modulo?.nombreModulo}</div>
                        }
                      </div>
                      <div>
                        { addTema || addModulo  ?  null : <Button descripcion={'X'} action={() => handleBorrarModulo(index)} /> }                   
                      </div>
                    </div>
                  }
                </div>
                <div className="temas border-l border-[#5A6ACF] ml-[15.5px] py-2">
                  {modulo?.temas.map((tema, temaIndex) => (
                    <div key={temaIndex} className="item mb-1">
                      {tema.nombreTema === '' ?
                        null
                        :
                        <h4 className={`flex flex-row gap-3 ml-10 items-center ${! tema.nombre ? ' font-semibold' : ''}`}>
                          Tema:
                          {tema.nombre ? 
                            <div className="flex gap-3 items-center ">
                              &quot;{tema.nombre.trim()}&quot;
                            </div>
                            :
                            <div className="flex gap-3 items-center ">
                              &quot;{tema.nombreTema.trim()}&quot;
                              {addTema ?  
                                <Button descripcion={'X'} action={() => handleBorrarTema(moduloActual, temaIndex)} />
                                :
                                <Button descripcion={'X'} action={() => handleBorrarTema(index, temaIndex)} />
                              }  
                            </div> 
                          }
                        </h4>
                      }
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          :
          <div className="empty flex h-full justify-center items-center pt-10">Aun no has creado modulos para esta formacion, aqui veras la estructura de modulos creados</div>
        }
      </div>
    </div>
  );
};

export default ModulesView;
