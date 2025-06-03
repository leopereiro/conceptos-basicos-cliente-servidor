const express = require("express");
const path = require("path");
const cors = require('cors');
const { accesoUser } = require("./0.CONTROLADORES/USUARIOS");
const { isUser } = require("./1.MIDDELWARES/USUARIOS");
const paxinas = require("./2.Datos/datos.paxinas");
const app = express();

// UTILIZO DOTENV : para iso debo escribir a seguinte liña
require('dotenv').config();

// use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

//// PETICIONS

app.post("/acceso", accesoUser);
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})

app.get("/paxina-app",isUser,(req,res)=>{
    res.send(paxinas.app)
})

app.get("/tarefas", isUser,(req,res)=> {
    const tarefas = {
        tarefas1: "esta é a primeira tarea",
        tarefas2: "esta é a segunda tarea",
        tarefas3: "esta é a terceira tarea"
    }
    res.send(tarefas);
})


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});