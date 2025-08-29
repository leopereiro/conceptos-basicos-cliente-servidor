import { endpoints } from "../datos.js"
import { eventosCliente,insercionUsers} from "./funcions.js"
import {adaptoToken} from "./EnvioDatos.js"

export async function PeticionPaxina(){
    let token = localStorage.getItem("token")
    //console.log("entro ... token? ",token)

    let obxectoEnvio = {
    method:"GET",
    headers:{
        "Authorization": token
        }
    }

    const paxinaEnTexto = await fetch(endpoints.paxinaApp, obxectoEnvio)
    const paxinaText = await paxinaEnTexto.text();
    const tokenParseado = adaptoToken()
    console.log("parseo token ???", tokenParseado)
    console.log("paxina ?",paxinaText)
    document.body.innerHTML = paxinaText;
  

    insercionUsers(endpoints);

      

    const sair = ()=>{
        console.log("sair")
        localStorage.removeItem("token");
        location.replace("/");
    }
    eventosCliente("#sair",sair)
}