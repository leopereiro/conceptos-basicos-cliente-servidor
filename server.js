const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => {
    const {nome, email} = req.body;
    console.log(nome, email);
    let condicionUsuarioCorrecto = req.body.nome == "Leo" && req.body.email == "leo@leo.com";
    let datoEnviadoCondicionUsuarioCorrecto = {
            resposta: "acceso autorizado",
            usuario:{
                nome: "Leo"
            }
        }
    let datoEnviadoEnErro = {resposta:"faltan campos ou usuario non rexistrado"}
    
    if(condicionUsuarioCorrecto){
        res.send(datoEnviadoCondicionUsuarioCorrecto);
    
    }else{
        res.send(datoEnviadoEnErro);
    }
});

app.get("/app", (req,res) => {
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});