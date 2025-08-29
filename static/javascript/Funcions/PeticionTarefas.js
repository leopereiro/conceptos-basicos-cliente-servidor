import { endpoints } from "../datos.js"
import { eventosCliente } from "./funcions.js"
import { adaptoToken, EnvioDatos } from "./EnvioDatos.js"

export async function PeticionTarefas() {
    let token = localStorage.getItem("token");
    let obxectoEnvio = {
        method: "GET",
        headers: {
            "Authorization": token
        }
    };

    const resposta = await fetch(endpoints.paxinaTarefas, obxectoEnvio);
    const tarefasText = await resposta.text();
    console.log("tarefas ?", tarefasText);

    document.body.innerHTML = tarefasText;

    const envioTarefa = document.getElementById("envioTarefa");
    if (envioTarefa) {
        envioTarefa.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log("formulario");
            let datosFormulario = new FormData(envioTarefa);
            let refEtiquetaCaixa = document.querySelector(".caixaTarefa");
            console.log(
                "datosFormulario ",
                datosFormulario.entries(),
                Object.fromEntries(datosFormulario.entries())
            );

            let datoRecibido = await EnvioDatos({filasTabla: [Object.fromEntries(datosFormulario.entries())]}, endpoints.insertar);
            console.log("datoRecibido ???", datoRecibido);
            for (let [name, value] of datosFormulario) {
                console.log(`${name} ${value}`);
                let etiquetaP = document.createElement("p");
                etiquetaP.innerHTML = value;
                refEtiquetaCaixa.append(etiquetaP);
            }
            /**let datoRecibido = await EnvioDatos(
            { filasTabla: [Object.fromEntries(datosFormulario.entries())] },
            endpoints.insertar
            );**/

        });
    }

    const sair = () => {
        console.log("sair");
        localStorage.removeItem("token");
        location.replace("/");
    }
    eventosCliente("#sair", sair);
}