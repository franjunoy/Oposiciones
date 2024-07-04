import { formacion, modulos, preguntas, temas } from '../database';
import { generateBot } from '../openAiFunctions/generateBot';
import { openVectorStore } from '../openAiFunctions/openVectorStore';

export const crearFormacion = async (nombreFormacion, descripcionFormacion) => {
  const nuevaFormacion = new formacion({
    nombre: nombreFormacion,
    descripcion: descripcionFormacion
  });
  await nuevaFormacion.save();
  return nuevaFormacion;
};

const crearTema = async (
  nombreTema,
  descripcionTema,
  formacionId,
  moduloId
) => {
  const nuevoTema = new temas({
    nombre: nombreTema,
    descripcion: descripcionTema,
    formacion: formacionId,
    modulo: moduloId
  });


  let bot = await generateBot(nuevoTema.nombre)
  nuevoTema.botId = bot.botId
  nuevoTema.conversationId = bot.conversacionId
  let vectorStore = await openVectorStore(nombreTema)
  nuevoTema.vectorStore = vectorStore
  await nuevoTema.save();

  return nuevoTema;
};
export const crearModulo = async (
  nombreModulo,
  descripcionModulo,
  formacionId
) => {
  const nuevoModulo = new modulos({
    nombre: nombreModulo,
    descripcion: descripcionModulo,
    formacion: formacionId
  });
  await nuevoModulo.save();
  return nuevoModulo;
};

export const crearModulosYTemas = async (modulosData, formacionId) => {

  const modulosPromises = modulosData.map(async (modulo) => {

    const nuevoModulo = await crearModulo(
      modulo.nombreModulo,
      modulo.descripcionModulo,
      formacionId
    );

    const temasPromises = modulo.temas.map(async (tema) => {
      return await crearTema(
        tema.nombreTema,
        tema.descripcionTema,
        formacionId,
        nuevoModulo._id
      );
    });

    const nuevosTemas = await Promise.all(temasPromises);

    nuevoModulo.temas = nuevosTemas.map(tema => tema._id)


    nuevoModulo.save()

    return nuevoModulo;
  });

  return await Promise.all(modulosPromises);
};

export const cursoById = async (id: string) => {
  const cursoCompleto = await formacion
    .findById(id)
    .populate({
      path: 'modulos',
      populate: {
        path: 'temas'
      }
    })
    .exec();
  return cursoCompleto;
};
export const CursosListaToHome = async () => {
  const cursoCompleto = await formacion.find().select('id _id nombre');
  let formatedList = cursoCompleto.map((ele) => ({
    title: ele.nombre,
    Boton1: true,
    BotonNombre1: 'Ingresar',
    cursoId: ele.id ? ele.id : ele._id
  }));
  return formatedList;
};

export const Formaciones = async () => {
  const cursoCompleto = await formacion
    .find()
    .populate('modulos')
    .populate({
      path: 'modulos',
      populate: {
        path: 'temas',
      },
    })
    .exec();
  return cursoCompleto;
};

export const crearTemasEnModulo = async (moduloActualizar) => {

  const moduloAgregarTema = await modulos.findById(moduloActualizar._id)
  if (!moduloAgregarTema) {
    throw new Error('Modulo no encontrado');
  }
  let temasNuevos = moduloActualizar.temas.filter(tema => !tema.modulo)

  const temasPromises = temasNuevos.map(async (tema) => {
    return await crearTema(
      tema.nombreTema,
      tema.descripcionTema,
      moduloActualizar.formacion,
      moduloActualizar._id
    );
  });

  const nuevosTemas = await Promise.all(temasPromises);
  moduloAgregarTema.temas.push(...nuevosTemas.map(nuevoTema => nuevoTema._id));

  await moduloAgregarTema.save();

  return moduloAgregarTema;
}

export const crearQuizletEnTema = async (themeId, quizlet) => {

  const tema = await temas.findById(themeId)
  
  const newQuizlet = new preguntas({
    formacion: tema.formacion,
    modulo: tema.modulo,
    tema: themeId,    
    pregunta: quizlet.pregunta,
    respuesta: quizlet.respuesta,
    respuestaFallida1: quizlet.respuestafalsa,
    respuestaFallida2: quizlet.respuestafalsa2,
    iaResumen: quizlet.explicacion    
  })
  newQuizlet.save()

  tema.preguntas.push(newQuizlet._id)
  tema.save()

  return newQuizlet
}

export const quizletById = async (id: string) => {
  
  const quizlet = await preguntas.findById(id)    
  return quizlet;
};

export const formacionesOnlyName = async ()=> {

  let allFormaciones = await formacion.find().select("nombre _id")
  return allFormaciones
}