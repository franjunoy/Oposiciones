import { Router } from 'express';
import { jwtUtils } from '../middlewares/jwtUtils';
import cursosController from '../controllers/cursosController/cursosController';

const { catchedAsync } = require('../utils');

const router = Router();

router.get(
  `/getallCourseList`,
  catchedAsync(cursosController.getAllCoursesToHome)
);
router.get(
  `/getallCourseName`,
  catchedAsync(cursosController.getAllCourseName)
);

export default router;
