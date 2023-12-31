import Proyecto from "../models/Proyecto.js";

const obtenerProyectos = async (req, res) => {
  const creador = req.usuario._id;

  try {
    const proyectos = await Proyecto.find({ creador });
    res.json(proyectos);
  } catch (error) {
    console.log(error);
  }
};

const nuevoProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  proyecto.creador = req.usuario._id;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerProyecto = async (req, res) => {
  const { id } = req.params;
  const proyecto = await Proyecto.findById(id);
  if (!proyecto) {
    return res.status(404).json({ msg: "Proyecto No Encontrado" });
  }
  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    return res.status(401).json({ msg: "Accion no valida" });
  }
  res.json(proyecto);
};

const editarProyecto = async (req, res) => {
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id);

  if (!proyecto) {
    return res.status(404).json({ msg: "Proyecto No Encontrado" });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    return res.status(401).json({ msg: "Accion no valida" });
  }
  
  proyecto.nombre = req.body.nombre || proyecto.nombre;
  proyecto.cliente = req.body.cliente || proyecto.cliente;
  proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
  proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;

  try {
    const proyectoAlmacenado = await proyecto.save();
      res.json(proyecto);
  } catch (error) {
    console.log(error);   
  }
};

const eliminarProyecto = async (req, res) => {

    const { id } = req.params;

    const proyecto = await Proyecto.findById(id);

    if (!proyecto) {
      return res.status(404).json({ msg: "Proyecto No Encontrado" });
    }

    if (proyecto.creador.toString() !== req.usuario._id.toString()) {
      return res.status(401).json({ msg: "Accion no valida" });
    }

    try {
        await Proyecto.deleteOne();
        res.json({msg: "Proyecto Eliminado"});
    } catch (error) {
        console.log(error);        
    }
};

const agregarColaborador = async (req, res) => {};

const eliminarColoborador = async (req, res) => {};

const obtenerTareas = async (req, res) => {};

export {
  obtenerProyecto,
  obtenerProyectos,
  nuevoProyecto,
  editarProyecto,
  eliminarColoborador,
  eliminarProyecto,
  agregarColaborador,
  obtenerTareas,
};
