import mongoose from 'mongoose';

const temasSchema = new mongoose.Schema(
  {
    formacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formacion'
    },
    modulo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modulos'
    },
    alumnosCursando: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    alumnosFinalizados: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    preguntas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'preguntas'
    }],
    preguntasMultiple: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'multipleQuestionSchema'
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    botId: {
      type: String,
    },
    conversationId:{
      type: String
    },
    vectorStore: {
      type: String
    },
    files: {
      type: Array
    }
  },
  {
    timestamps: true
  }
);

export default temasSchema
