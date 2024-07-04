import mongoose from 'mongoose';

const formacionSchema = new mongoose.Schema(
  {
    alumnos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    modulos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modulos'
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
    }
  },
  {
    timestamps: true
  }
);

export default  formacionSchema
