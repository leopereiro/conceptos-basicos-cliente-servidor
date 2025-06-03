import { endpoints } from "../datos.js"
import { eventosCliente } from "./funcions.js"

export async function PeticionPaxina(){
                let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)

                let obxectoEnvio = {
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                }

                const paxinaEnTexto = await fetch(endpoints.paxinaApp, obxectoEnvio)
                const paxinaText = await paxinaEnTexto.text();
                console.log("paxina ?",paxinaText)
                document.body.innerHTML = paxinaText;

                // PASOS PARA SOLICITAR AS TAREFAS
                // - TEÑO QUE PREPARAR O OBXECTO DE ENVÍO
                // Dentro do obxecto de envío teño que saber o seguinte:
                // - Teño que utilizar o token
                // - Teño que saber o endpoint, neste caso/tareas
                // - Teño que saber o método, neste caso GET

                const tarefas = await fetch(endpoints.tarefas, obxectoEnvio);
                const tarefasJson = await tarefas.json()
                console.log("tarefas: ", tarefasJson)

                const refMain = document.querySelector("main");
                console.log("refMain ?", refMain)

                            let elementoDiv = document.createElement("div");

      for (let propiedade in tarefasJson) {
        console.log(tarefasJson[propiedade], propiedade); // CONTIDO DO OBXETO obxetos[propiedade], propiedade É A PROPIEDADE
        let elementoP = document.createElement("p"); // CREO UNHA ETIQUETA 'p'
        elementoP.innerHTML = tarefasJson[propiedade]; // ACCEDO O propiedade DUN OBXETO E a introduzco na etiqueta p creada
        console.log("elementoP", elementoP);
        elementoDiv.append(elementoP); // INTRODUZCO NO DIV a etiqueta creada p co seu propiedade
        console.log(elementoDiv);
      }
      document.body.append(elementoDiv);

                const sair = ()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    }
                eventosCliente("#sair",sair)
        

}