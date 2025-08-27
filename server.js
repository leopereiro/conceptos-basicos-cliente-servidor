const express = require("express");
const path = require("path");
const cors = require('cors');
const { accesoUser, newUser } = require("./0.CONTROLADORES/USUARIOS");
const { insertarDatosTarefa, invoicesUser } = require("./0.CONTROLADORES/TAREFAS")
const { isUser } = require("./1.MIDDELWARES/USUARIOS");
//const folderUser = require("./1.MIDDELWARES/USUARIOS/folderUser");
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

// PAXINAS BALEIRAS
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})
app.get("/tarefas",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/tarefas.html"));
})

// O CONTIDO DAS PÁXINAS

app.get("/paxina-app",isUser,(req,res)=>{
    res.send(paxinas.app)
})

app.get("/paxina-tarefas",isUser,(req,res)=> {
    res.send(paxinas.tarefas);
})

app.post("/insertar-tarefa", isUser, (req, res) => {
    // ...lógica para gardar a tarefa...
    res.json({ mensaje: "Tarefa gardada correctamente" });
});
/**app.post("/creousuario",isUser, newUser,(req,res)=>{
    console.log("Datos recibidos para crear usuario:", req.body);
    res.send({mensaje: "Usuario creado correctamente"});
})**/

app.post("/insertar-tarefa", isUser, insertarDatosTarefa);

app.post("/creousuario", isUser, newUser);


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});