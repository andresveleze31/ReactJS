import { json } from "express";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/Usuario.js";

async function registrar(req, res) {
  //Evitar registros duplicados.
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email: email });

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }
}

async function autenticar(req, res) {
  const { email, password } = req.body;

  //Comprobar si el usuario existe.
  try {
    const usuario = await Usuario.findOne({ email: email });

    if (!usuario) {
      const error = new Error("El usuario no existe");
      return res.status(404).json({ msg: error.message });
    }

    //Comprobar si el usuario esta confirmado
    if (!usuario.confirmado) {
      const error = new Error("La cuenta no esta confirmada");
      return res.status(403).json({ msg: error.message });
    }

    //Comprobar si el password es igual
    if (await usuario.comprobarPassword(password)) {
      res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: generarJWT(usuario._id),
      });
    } else {
      const error = new Error("El password es incorrecto");
      return res.status(403).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
  }
}

async function confirmar(req, res) {
  const { token } = req.params;

  try {
    //Encontrar Usuario con ese Token
    const usuario = await Usuario.findOne({ token });
    if (!usuario) {
      const error = new Error("Token invalido");
      return res.status(403).json({ msg: error.message });
    }

    //Confirmar cuenta.
    usuario.confirmado = true;
    usuario.token = "";
    await usuario.save();

    res.json({ msg: "Usuario Confirmado Correctamente" });
  } catch (error) {
    console.log(error);
  }
}

async function olvidePassword(req, res) {
  const { email } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      const error = new Error("Cuenta no Registrada");
      return res.status(403).json({ msg: error.message });
    }
    usuario.token = generarId();
    usuario.save();

    res.json({ msg: "Hemos enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error);
  }
}

async function comprobarToken(req, res) {
  const { token } = req.params;

  try {
    const usuario = await Usuario.findOne({ token });

    if (!usuario) {
      const error = new Error("Token Invalido");
      return res.status(403).json({ msg: error.message });
    }

    res.json({ msg: "Token Valido" });
  } catch (error) {
    console.log(error);
  }
}

async function nuevoPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const usuario = await Usuario.findOne({ token });

    if (!usuario) {
      const error = new Error("Token Invalido");
      return res.status(403).json({ msg: error.message });
    }

    usuario.password = password;
    usuario.token = "";
    await usuario.save();

    res.json({ msg: "Password modificado correctamente" });
  } catch (error) {
    console.log(error);
  }
}

async function perfil(req, res) {
  console.log("desde Perfil");
}

export {
  registrar,
  perfil,
  autenticar,
  confirmar,
  nuevoPassword,
  olvidePassword,
  comprobarToken,
};
