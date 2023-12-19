import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js"

const agregarTarea = async(req, res) => {

    const {proyecto} = req.body;

    const existeProyecto = await Proyecto.findById(proyecto);

    if(!existeProyecto){
        res.status(404).json({msg: "El proyecto no existe"});
    }

    if(existeProyecto.creador.toString() === req.usuario._id.toString()){

        try {
            const tareaAlmacenda = await Tarea.create(req.body);
            res.json(tareaAlmacenda);            
        } catch (error) {
            console.log(error);        
        }

    }else{
        return res.status(404).json("No tienes los permisos para añadir tareas")
    }

}
const obtenerTarea = async(req, res) => {}
const actualizarTarea = async(req, res) => {}
const eliminarTarea = async(req, res) => {}
const cambiarEstado = async(req, res) => {}

export { agregarTarea, obtenerTarea, actualizarTarea, eliminarTarea, cambiarEstado};