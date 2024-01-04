import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import workoutRoutes from "./routes/workoutRoutes.js"
import conectarDB from "./config/db.js";

//Express App.
const app = express();

//Configurar CORS.
const whiteList = [process.env.FRONT_URL || "http://localhost:5173"];
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            //Puede Consultar API
            callback(null, true);
        }else{
            //No esta Permitido
            callback(new Error("Erro de Cors"));
        }
    }
}
app.use(cors(corsOptions))

//Permitir POST.
app.use(express.json());

//Configuracion Variables Entorno.
dotenv.config();

//Conectar DB.
conectarDB();

//Routing
app.use("/api/workouts", workoutRoutes);

//Listen for requests.
app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto" + process.env.PORT);
})