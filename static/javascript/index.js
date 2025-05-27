import { AcesoUsuario } from "./Funcions/AcesoUsuario.js";
import { PeticionPaxina } from "./Funcions/PeticionPaxina.js";


if(location.pathname == "/app"){
    PeticionPaxina()
}
if(location.pathname == "/"){
    AcesoUsuario()// GARDO O USUARIO ENCRIPTADO
}