import { AccesoUsuario } from "./Funcions/AccesoUsuario.js";
import { PeticionPaxina } from "./Funcions/PeticionPaxina.js";


if(location.pathname == "/app"){
    PeticionPaxina()
}
if(location.pathname == "/"){
    AccesoUsuario()// GARDO O USUARIO ENCRIPTADO
}