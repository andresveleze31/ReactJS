import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";
async function obtenerProyectos(req, res) {
  const { _id } = req.usuario;

  try {
    const proyectos = await Proyecto.find({ creador: _id });
    return res.json(proyectos);
  } catch (error) {
    console.log(error);
  }
}

async function nuevoProyecto(req, res) {
  const proyecto = new Proyecto(req.body);
  proyecto.creador = req.usuario._id;

  try {
    const proyectoAlmacenado = await proyecto.save();
    return res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
}

async function obtenerProyecto(req, res) {
  const { _id } = req.usuario;
  const idProyecto = req.params.id;

  try {
    const proyecto = await Proyecto.findOne({ _id: idProyecto });

    if (!proyecto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({ msg: error.message });
    }

    if (proyecto.creador.toString() !== _id.toString()) {
      const error = new Error("Accion No Valida");
      return res.status(401).json({ msg: error.message });
    }

    res.json(proyecto);
  } catch (error) {
    console.log(error);
  }
}
async function editarProyecto(req, res) {
  const { _id } = req.usuario;
  const idProyecto = req.params.id;

  try {
    const proyecto = await Proyecto.findOne({ _id: idProyecto });

    if (!proyecto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({ msg: error.message });
    }

    if (proyecto.creador.toString() !== _id.toString()) {
      const error = new Error("Accion No Valida");
      return res.status(401).json({ msg: error.message });
    }

    proyecto.nombre = req.body.nombre || proyecto.nombre;
    proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
    proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
    proyecto.cliente = req.body.cliente || proyecto.cliente;

    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
}
async function eliminarProyecto(req, res) {
  const { _id } = req.usuario;
  const idProyecto = req.params.id;

  try {
    const proyecto = await Proyecto.findOne({ _id: idProyecto });

    if (!proyecto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({ msg: error.message });
    }

    if (proyecto.creador.toString() !== _id.toString()) {
      const error = new Error("Accion No Valida");
      return res.status(401).json({ msg: error.message });
    }

    await proyecto.deleteOne();
    res.json({msg: "Proyecto Eliminado"});

  } catch (error) {
    console.log(error);
  }
}
async function agregarColaborador(req, res) {}
async function eliminarColaborador(req, res) {}

async function obtenerTareas(req, res) {

    const {id} = req.params;

    try {
        const proyecto = await Proyecto.findById(id);

        if(!proyecto){
            const error = new Error("No Encontrado");
            return res.status(404).json({ msg: error.message });
        }

        const tareas = await Tarea.find({proyecto: id});

        if (!tareas) {
          const error = new Error("No Hay Tareas");
          return res.status(404).json({ msg: error.message });
        }

        res.json(tareas);

    } catch (error) {
        
    }

}

export {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  obtenerTareas,
};
