import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const preguntasSchema = new mongoose.Schema(
  {
    formacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formacion'
    },
    modulo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modulos'
    },
    tema: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'temas'
    },
    alumnosAprobada: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    alumnosFallida: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    pregunta: {
      type: String,
      required: true
    },
    respuesta: {
      type: String,
      required: true
    },
    respuestaFallida1: {
      type: String,
      required: true
    },
    respuestaFallida2: {
      type: String,
      required: true
    },
    iaResumen: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default preguntasSchema
