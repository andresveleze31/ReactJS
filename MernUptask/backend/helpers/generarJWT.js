import jwt from "jsonwebtoken";

function generarJWT(id){
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
}

export default generarJWT;