import mongoose from "mongoose";

const tareaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: Boolean,
    default: false
  },
  fecheEntrega:{
    type: Date,
    require: true,
    default: Date.now()
  },
  prioridad: {
    type: String,
    required: true,
    enum: ["Baja", "Media", "Alta"],
  },
  proyecto:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proyecto"
  }

}, {
    timestamps: true
});

const Tarea = mongoose.model("Tarea", tareaSchema);
export default Tarea;