import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";

async function agregarTarea(req, res) {
  const { proyecto } = req.body;

  try {
    const existeProyecto = await Proyecto.findOne({ _id: proyecto });

    if (!existeProyecto) {
      const error = new Error("El proyecto no existe");
      return res.status(404).json({ msg: error.message });
    }

    if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("No tienes los permisos para añadir tareas");
      return res.status(404).json({ msg: error.message });
    }

    const tareaAlmacenada = await Tarea.create(req.body);
    return res.json(tareaAlmacenada);

  } catch (error) {
    console.log(error);
  }
}

async function obtenerTarea(req, res) {
    const idTarea = req.params.id;

    try {

        const tarea = await Tarea.findOne({_id: idTarea});

        if(!tarea){
            const error = new Error("Tarea Inexistente");
            return res.status(404).json({ msg: error.message });
        }

        const {proyecto} = tarea;

        const proyectoExiste = await Proyecto.findOne({_id: proyecto});

        if (!proyectoExiste) {
          const error = new Error("El proyecto no existe");
          return res.status(404).json({ msg: error.message });
        }

        if (proyectoExiste.creador.toString() !== req.usuario._id.toString()) {
          const error = new Error("Accion No Valida");
          return res.status(404).json({ msg: error.message });
        }

        return res.json(tarea);
        
    } catch (error) {
        console.log(error);
        
    }
}
async function actualizarTarea(req, res) {
    const idTarea = req.params.id;

    try {
      const tarea = await Tarea.findOne({ _id: idTarea });

      if (!tarea) {
        const error = new Error("Tarea Inexistente");
        return res.status(404).json({ msg: error.message });
      }

      const { proyecto } = tarea;

      const proyectoExiste = await Proyecto.findOne({ _id: proyecto });

      if (!proyectoExiste) {
        const error = new Error("El proyecto no existe");
        return res.status(404).json({ msg: error.message });
      }

      if (proyectoExiste.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error("Accion No Valida");
        return res.status(404).json({ msg: error.message });
      }

      tarea.nombre = req.body.nombre || tarea.nombre;
      tarea.descripcion = req.body.descripcion || tarea.descripcion;
      tarea.prioridad = req.body.prioridad || tarea.prioridad;
      tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;

      const tareaActualizada = await tarea.save();
      res.json(tareaActualizada);
      
    } catch (error) {
      console.log(error);
    }
}
async function eliminarTarea(req, res) {

    const idTarea = req.params.id;

    try {
      const tarea = await Tarea.findOne({ _id: idTarea });

      if (!tarea) {
        const error = new Error("Tarea Inexistente");
        return res.status(404).json({ msg: error.message });
      }

      const { proyecto } = tarea;

      const proyectoExiste = await Proyecto.findOne({ _id: proyecto });

      if (!proyectoExiste) {
        const error = new Error("El proyecto no existe");
        return res.status(404).json({ msg: error.message });
      }

      if (proyectoExiste.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error("Accion No Valida");
        return res.status(404).json({ msg: error.message });
      }

      await tarea.deleteOne();
      res.json({msg: "Tarea Eliminada Correctamente"});

    } catch (error) {
      console.log(error);
    }

}
async function cambiarEstado(req, res) {}

export {
  agregarTarea,
  obtenerTarea,
  eliminarTarea,
  cambiarEstado,
  actualizarTarea,
};
