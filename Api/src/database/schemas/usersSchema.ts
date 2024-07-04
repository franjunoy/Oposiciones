import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const usersSchema = new mongoose.Schema(
  {
    formacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formacion'
    },
    temaActual: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'temas'
    },
    temaAprobados: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'temas'
    }],
    moduloActual: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modulos'
    },
    modulosAprobados: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modulos'
    }],
    preguntasAprobadas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'preguntas'
    }],
    preguntasFallidas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'preguntas'
    }],
    type: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    name: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      unique: true,
      default: ""
    },
    password: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    deviceToken: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export default usersSchema
