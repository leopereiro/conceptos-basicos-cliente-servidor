const express = require("express");
const path = require("path");
const cors = require('cors');
const { accesoUser, newUser } = require("./0.CONTROLADORES/USUARIOS");
const { insertarDatosTarefa, invoicesUser,listaTarefas ,actualizarDatosTarefa,borrarDatosTarefa} = require("./0.CONTROLADORES/TAREFAS")
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

app.get("/lista-tarefas", isUser, listaTarefas);


// O CONTIDO DAS PÁXINAS

app.get("/paxina-app",isUser,(req,res)=>{
    res.send(paxinas.app)
})

app.get("/paxina-tarefas",isUser,(req,res)=> {
    res.send(paxinas.tarefas);
})
// accións sobre a base de datos
app.post("/creousuario", isUser, newUser);

// SOBRE A LISTA DE TAREFAS

app.post("/insertar-tarefa", isUser, insertarDatosTarefa );
app.put("/actualizar-tarefa", isUser, actualizarDatosTarefa );
app.delete("/borrar-tarefa", isUser, borrarDatosTarefa );


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});