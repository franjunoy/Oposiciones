import mongoose from 'mongoose';

const modulosSchema = new mongoose.Schema(
  {
    formacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formacion'
    },
    alumnosCursando: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    alumnosFinalizados: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    temas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'temas'
    }],
    usuariosActuales: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }],
    usuariosAprobados: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
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

  },
  {
    timestamps: true
  }
);

export default  modulosSchema
