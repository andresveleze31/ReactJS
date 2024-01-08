import express from "express";

import { loginUser, signupUser } from "../controllers/userController.js";

const router = express.Router();

//LOGIN
router.post("/login", loginUser);
//SignUP
router.post("/signup", signupUser);

export default router;