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
    const envioTarefa = document.getElementById("envioTarefa");
    if (envioTarefa) {
    envioTarefa.addEventListener("submit", async (e) => {
        // ...resto do código...
    });
}

    insercionUsers(endpoints);

                
    // PASOS PARA SOLICITAR AS TAREFAS
    // - TEÑO QUE PREPARAR O OBXECTO DE ENVÍO
    // Dentro do obxecto de envío teño que saber o seguinte:
    // - Teño que utilizar o token
    // - Teño que saber o endpoint, neste caso/tareas
    // - Teño que saber o método, neste caso GET

    /*const tarefas = await fetch(endpoints.tarefas, obxectoEnvio);
    const tarefasJson = await tarefas.json()
    console.log("tarefas: ", tarefasJson)

    const refMain = document.querySelector("main");
    console.log("refMain ?", refMain)

    let elementoDiv = document.createElement("div");*/

    /*for (let propiedade in tarefasJson) {
        console.log(tarefasJson[propiedade], propiedade); // CONTIDO DO OBXETO obxetos[propiedade], propiedade É A PROPIEDADE
        let elementoP = document.createElement("p"); // CREO UNHA ETIQUETA 'p'
        let elementoSpan = document.createElement("span");
        let elementoImg = document.createElement("img");
        elementoDiv.src = "./imaxes/eliminar-boton-avif"
        elementoSpan.innerHTML = tarefasJson [propiedade];
        elementoP.append(elementoSpan);
        //elementoP.innerHTML = tarefasJson[propiedade]; // ACCEDO O propiedade DUN OBXETO E a introduzco na etiqueta p creada
        elementoP.append(elementoImg);
        console.log("elementoP", elementoP);
        elementoDiv.append(elementoP); // INTRODUZCO NO DIV a etiqueta creada p co seu propiedade
        console.log(elementoDiv);

        elementoImg.addEventListener
    }*/
    // document.body.append(elementoDiv);

    const sair = ()=>{
        console.log("sair")
        localStorage.removeItem("token");
        location.replace("/");
    }
    eventosCliente("#sair",sair)
}