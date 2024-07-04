import { Router } from 'express'
import usersControllers from '../controllers/usersControllers/usersControllers';
import {jwtUtils} from "../middlewares/jwtUtils";

//const { limit5cada30minutos } = require('../utils/rate-limiters');

const { catchedAsync } = require('../utils');

const router = Router();

router.post('/login', catchedAsync(usersControllers.login));


router.post(`/register`, catchedAsync(usersControllers.register))
router.post(`/reloadUser`,  jwtUtils, catchedAsync(usersControllers.reloadUser))
router.post(`/device/:token`, jwtUtils, catchedAsync(usersControllers.updateDevice))

export default router;
