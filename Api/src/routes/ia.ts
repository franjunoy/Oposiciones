

import { Router } from 'express';
import { jwtUtils } from "../middlewares/jwtUtils";
import iaControllers from '../controllers/iaController/iaControllers';
import multer from 'multer';
import path from 'path';

// Configurar el motor de almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Especificar el directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    // Usar el nombre original del archivo y agregar un sufijo único
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const { catchedAsync } = require('../utils');

const router = Router();

router.post('/udploadPdf/:themeId', jwtUtils, upload.single('file'), catchedAsync(iaControllers.udploadIntoToOpenAi));
router.post('/generateQuestion/:docId/:themeId', catchedAsync(iaControllers.generateQuizlet));
router.post('/generateTextQuestion/:docId/:themeId', catchedAsync(iaControllers.generateRelactionateQuizlet));

router.get('/getAllDocument/:themeId', jwtUtils, catchedAsync(iaControllers.getAllDocuments));

export default router;
