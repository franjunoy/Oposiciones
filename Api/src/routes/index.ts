import { Router } from "express";
const router = Router();
import user from './user'
import dashboard from "./dashboard";
import ia from "./ia";
import general from "./general";


router.use('/user', user);

router.use('/dashboard', dashboard);
router.use('/ia', ia);
router.use('/general', general);

export default router
