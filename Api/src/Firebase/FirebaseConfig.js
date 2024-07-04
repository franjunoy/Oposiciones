import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Cargar el archivo de credenciales de servicio
const serviceAccount = JSON.parse(
  readFileSync(
    resolve(__dirname, '../../esfera-oposiciones-app-firebase-adminsdk-8fvev-6c074cd6d6.json'), 
    'utf8'
  )
);

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

export default auth;
