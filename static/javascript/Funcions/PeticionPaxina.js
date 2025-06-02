import { endpoints } from "../Datos/datos.js"

export async function PeticionPaxina(){
    let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)

                let obxectoEnvio = await fetch("/paxina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })

                const paxinaEnTexto = await fetch(endpoints.paginaApp, obxectoEnvio);
                const paxinaText = await paxinaEnTexto.text()
                console.log("paxina ?",paxinaText)
                document.body.innerHTML = paxinaText;

                // PASOS PARA SOLICITAR AS TAREFAS
                // - TEÑO QUE PREPARAR O OBXECTO DE ENVÍO
                // Dentro do obxecto de envío teño que saber o seguinte:
                // - Teño que utilizar o token
                // - Teño que saber o endpoint, neste caso/tareas
                // - Teño que saber o método, neste caso GET

                const peticionTarefas = await fetch(endpoints, tareas, obxectoEnvio);
                const tarefasText = await peticionTarefas.json()
                console.log("tarefas: ", tarefasText)

                const refMain = document.querySelector("main");
                console.log("refMain ?", refMain)

                for(let tarefa in tarefasJson) {
                console.log(tarefa)
                refMain.innerHTML += `<div>${tarefasText.tareas1}</div>`
                }

                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}