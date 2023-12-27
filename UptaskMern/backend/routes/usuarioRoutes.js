import express from "express";
import {
  confirmar,
  registrar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//PUBLICO
router.post('/', registrar);
router.post("/login", autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

//PRIVADO
router.get('/perfil', checkAuth, perfil);

export default router;