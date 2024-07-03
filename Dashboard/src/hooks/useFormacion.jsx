import { useEffect, useState } from 'react';

const useFormacion = (modificarFormacion) => {
  

  const [formacion, setFormacion] = useState({
    nombreFormacion: '',
    descripcionFormacion: '',
    modulos: [
      {
        nombreModulo: '',
        descripcionModulo: 'Ingrese descripcion',
        temas: [
          {
            nombreTema: '',
            descripcionTema: '',
          },
        ],
      },
    ],
  });

  console.log('formacion', formacion)


  useEffect(()=> {
    if (modificarFormacion) setFormacion(modificarFormacion)
  },[modificarFormacion])

  const updateFormacion = (field, value) => {
    setFormacion((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const updateModulo = (field, value) => {
    const newModulos = [...formacion.modulos];
    newModulos[formacion.modulos.length - 1][field] = value;
    setFormacion((prevState) => ({
      ...prevState,
      modulos: newModulos,
    }));
  };

  const updateTema = (value) => {
    const temas = value.split(',').map((tema) => ({ nombreTema: tema.trim(), descripcionTema: 'Ingrese descripcion' }));
    setFormacion((prevState) => {
      const newModulos = [...prevState.modulos];
      newModulos[newModulos.length - 1].temas = temas;
      return { ...prevState, modulos: newModulos };
    });
  };
  
  const addTema = (value, index) => {
    const temas = value.split(',').map((tema) => ({ nombreTema: tema.trim(), descripcionTema: 'Ingrese descripcion' }));
    setFormacion((prevState) => {
      const newModulos = [...prevState.modulos];
      newModulos[index].temas = [...newModulos[index].temas, ...temas];
      return { ...prevState, modulos: newModulos };
    });
  };
  

  const handleAddModule = () => {   
      const newModule = {
        nombreModulo: '',
        descripcionModulo: 'Ingrese descripcion',
        temas: [
          {
            nombreTema: '',
            descripcionTema: '',
          },
        ],
      };
      setFormacion((prevState) => ({
        ...prevState,
        modulos: [...prevState.modulos, { ...newModule }],
      }));    
  };

  return {
    formacion,
    updateFormacion,
    updateModulo,
    updateTema,
    handleAddModule,
    addTema,
  };
};

export default useFormacion;
