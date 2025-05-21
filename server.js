const express = require("express");
const path = require("path");
const app = express();


app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => {
    console.log(req.body);
    if(req.body.nome === "Leo" && req.body.email === "leo@leo.com") {
    res.sendFile(path.join(__dirname, "static/views/app.html"));
    }else{
        res.send("<h1>Usuario non autorizado</h1>")
    }
});
app.get("/enviousuario", (req, res) => {
    res.send({usuario:{
        nome: "Leo"
    }})
})

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});