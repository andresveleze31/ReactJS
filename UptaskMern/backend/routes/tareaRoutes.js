import express from "express";
import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
} from "../controllers/tareaController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/:id", checkAuth, obtenerTarea);
router.put("/:id", checkAuth, actualizarTarea);
router.delete("/:id", checkAuth, eliminarTarea);

router.post("/", checkAuth, agregarTarea);

router.post("/estado/:id", checkAuth, cambiarEstado);

export default router;
