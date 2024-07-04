import mongoose from 'mongoose';


import { userConexion } from '../config/env';
import usersSchema from './schemas/usersSchema';
import preguntasSchema from './schemas/preguntasSchema';
import modulosSchema from './schemas/modulosSchema';
import temasSchema from './schemas/temasSchema';
import formacionSchema from './schemas/formacionSchema';
import multipleQuestionSchema from './schemas/multipleQuestionSchema';

mongoose.set('strictQuery', true);

const deploy = userConexion.db_uri;

export const conn = mongoose.createConnection(deploy);

export const users = conn.model('users', usersSchema);
export const formacion = conn.model('formacion', formacionSchema);
export const preguntas = conn.model('preguntas', preguntasSchema);
export const modulos = conn.model('modulos', modulosSchema);
export const temas = conn.model('temas', temasSchema);
export const multipleQuestion = conn.model('multipleQuestionSchema', multipleQuestionSchema);

mongoose.connect(deploy).then(() => {
  console.log("Database connected");
}).catch(error => {
  console.error("Database connection error:", error);
});
