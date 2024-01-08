import mongoose from "mongoose";
import User from "../models/User.js";
import validator from "validator";
import { generarJWT } from "../helpers/createJWT.js";

//Login User
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("El usuario no existe");
      return res.status(404).json({ msg: error.message });
    }

    //Comprobar si el password es igual
    if (await user.comprobarPassword(password)) {
      res.json({
        _id: user._id,
        email: user.email,
        token: generarJWT(user._id),
      });
    } else {
      const error = new Error("El password es incorrecto");
      return res.status(403).json({ msg: error.message });
    }


  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

//Sign User
async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    //Validaciones
    if (!email || !password) {
      throw Error("All Fields must be filled");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Password is weak");
    }

    const newUser = await User.create({ email, password });
    //Crear Token
    const token = generarJWT(newUser._id);

    return res.status(200).json({ newUser, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { loginUser, signupUser };
