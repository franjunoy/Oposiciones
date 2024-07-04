import { InscribirManualmente } from './Inscribirmanualmente';
import getAllCourseName from './getAllCourseName';
import getAllCoursesToHome from './getAllCoursesToHome';
import getAllFormation from './getAllFormation';
import getCourseById from './getCourseById';
import getQuizlet from './getQuizlet';
import newCurso from './newCurso';
import newQuizlet from './newQuizlet';
import putTemas from './putTemas'
import getAllAlumnos from './getAllAlumnos';
import getAllModulos from "./getAllModulos"

const cursosController = {
  newCurso,
  getCourseById,
  getAllCoursesToHome,
  getAllFormation,
  putTemas,
  newQuizlet,
  getQuizlet,
  getAllCourseName,
  InscribirManualmente,
  getAllAlumnos,
  getAllModulos
};

export default cursosController;
