import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const multipleQuestionSchema = new mongoose.Schema(
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
    texto: String,
    preguntas:{
        pregunta1:{
            positive: String,
            negative: String,
            negative2: String
        },
        pregunta2:{
            positive: String,
            negative: String,
            negative2: String
        },
        pregunta3:{
            positive: String,
            negative: String,
            negative2: String
        },
        pregunta4:{
            positive: String,
            negative: String,
            negative2: String
        },
        pregunta5:{
            positive: String,
            negative: String,
            negative2: String
        }
    }
    
  },
  {
    timestamps: true
  }
);

export default multipleQuestionSchema
