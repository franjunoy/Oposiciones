import { formacion, modulos, users } from "../database"

export const inscribirAlumno = async (userId, cursoId) => {

    let inscribirAlCurso = await formacion.findById(cursoId)
    inscribirAlCurso.alumnos.push(userId)
    await inscribirAlCurso.save()
    let inscribirPrimerModulo = await modulos.findById(inscribirAlCurso.modulos[0])
    inscribirPrimerModulo.alumnosCursando.push(userId)
    inscribirPrimerModulo.usuariosActuales.push(userId)
    await inscribirPrimerModulo.save()
   let alumno =  await users.findById(userId)
   alumno.formacion = cursoId
   alumno.moduloActual = inscribirAlCurso.modulos[0]
   alumno.temaActual = inscribirPrimerModulo.temas[0]
    await alumno.save()
    return alumno
}   

export const alumnos = async () => {
    const allAlumnos = await users
      .find()
    //   .populate('modulos')
    //   .populate({
    //     path: 'modulos',
    //     populate: {
    //       path: 'temas',
    //     },
    //   })
      .exec();
    return allAlumnos;
  };


  export const getModulos = async () => {
    const allAlumnos = await modulos
      .find()
    //   .populate('modulos')
    //   .populate({
    //     path: 'modulos',
    //     populate: {
    //       path: 'temas',
    //     },
    //   })
      .exec();
    return allAlumnos;
  };