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

// PAXINAS VALEIRAS
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})
app.get("/tarefas",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/tarefas.html"));
})

// O CONTIDO DAS PÁXINAS
app.post("/recibo-datos-test", (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.send({ mensaje: "Datos recibidos correctamente" });
});
app.get("/paxina-app",isUser,(req,res)=>{
    res.send(paxinas.app)
})

app.get("/paxina-tarefas",isUser,(req,res)=> {
    
    res.send(paxinas.tarefas);
})


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});