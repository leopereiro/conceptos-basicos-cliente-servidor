import { AccesoUsuario } from "./Funcions/AccesoUsuario.js";
import { PeticionPaxina } from "./Funcions/PeticionPaxina.js";
import { Tarefas } from "./Funcions/Tarefas.js";   


if(location.pathname == "/app"){
    PeticionPaxina()
}
if(location.pathname == "/"){
    AccesoUsuario()// GARDO O USUARIO ENCRIPTADO
}
if(location.pathname == "/tarefas"){
    console.log("Executando Tarefas()");
    Tarefas()
}