import { Router } from 'express';
import usersControllers from '../controllers/usersControllers/usersControllers';
import { jwtUtils } from '../middlewares/jwtUtils';
import cursosController from '../controllers/cursosController/cursosController';

const { catchedAsync } = require('../utils');

const router = Router();

router.get(
  `/gethomecourse`,
  jwtUtils,
  catchedAsync(cursosController.getAllCoursesToHome)
);
router.get(
  `/curso/:id`,
  jwtUtils,
  catchedAsync(cursosController.getCourseById)
);
router.get(
  `/formaciones`,
  jwtUtils,
  catchedAsync(cursosController.getAllFormation)
);
router.post(
  `/crearformacion`,
  jwtUtils,
  catchedAsync(cursosController.newCurso)
);
router.post(
  `/modificartemas`,
  jwtUtils,
  catchedAsync(cursosController.putTemas)
);
router.post(
  `/crearpreguntas`,
  jwtUtils,
  catchedAsync(cursosController.newQuizlet)
);
router.get(
  `/quizletbyid/:id`,
  jwtUtils,
  catchedAsync(cursosController.getQuizlet)
);
router.post(
  `/inscripcionManual`,
  jwtUtils,
  catchedAsync(cursosController.InscribirManualmente)
);
router.get(
  `/alumnos`,
  jwtUtils,
  catchedAsync(cursosController.getAllAlumnos)
);
router.get(
  `/modulos`,
  jwtUtils,
  catchedAsync(cursosController.getAllModulos)
);

export default router;
