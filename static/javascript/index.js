import { AccesoUsuario } from "./Funcions/AccesoUsuario.js";
import { PeticionPaxina } from "./Funcions/PeticionPaxina.js";
import { PeticionTarefas } from "./Funcions/PeticionTarefas.js";   


if(location.pathname == "/app"){
    PeticionPaxina()
}
if(location.pathname == "/"){
    AccesoUsuario()// GARDO O USUARIO ENCRIPTADO
}
if(location.pathname == "/tarefas"){
    console.log("Executando PeticionTarefas()");
    PeticionTarefas()
}