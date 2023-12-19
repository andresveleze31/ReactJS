import express from "express"
import {
  obtenerProyecto,
  obtenerProyectos,
  nuevoProyecto,
  editarProyecto,
  eliminarColoborador,
  eliminarProyecto,
  agregarColaborador,
  obtenerTareas,
} from "../controllers/proyectoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get('/', checkAuth, obtenerProyectos);
router.post('/', checkAuth, nuevoProyecto);

router.get("/:id", checkAuth, obtenerProyecto);
router.put("/:id", checkAuth, editarProyecto);
router.delete("/:id", checkAuth, eliminarProyecto);

router.get('/tareas/:id', checkAuth, obtenerTareas);
router.post('/agregar-colaborador/:id', checkAuth, agregarColaborador );
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColoborador );

export default router;

