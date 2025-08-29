import { endpoints } from "../datos.js"
import { eventosCliente } from "./funcions.js"
import { adaptoToken, EnvioDatos,EnvioDatosPUT } from "./EnvioDatos.js"

const pintarPaxina = async () => {
    // Lógica para pintar a páxina de tarefas
    let token = localStorage.getItem("token");
    let obxectoEnvio = {
        method: "GET",
        headers: {
            "Authorization": token
        }
    };

    const resposta = await fetch(endpoints.paxinaTarefas, obxectoEnvio);
    const tarefasText = await resposta.text();
    //console.log("tarefas ?", tarefasText);

    document.body.innerHTML = tarefasText;
}
const pintarTarefa = async () => {
    const envioTarefa = document.getElementById("envioTarefa");
    if (envioTarefa) {
        envioTarefa.addEventListener("submit", async (e) => {
            e.preventDefault();
            //console.log("formulario");
            let datosFormulario = new FormData(envioTarefa);
            let refEtiquetaCaixa = document.querySelector(".caixaTarefa");
            console.log(
                "datosFormulario ",
                datosFormulario.entries(),
                Object.fromEntries(datosFormulario.entries())
            );

            let datoRecibido = await EnvioDatos({filasTabla: [Object.fromEntries(datosFormulario.entries())]}, endpoints.insertar);
            //console.log("datoRecibido ???", datoRecibido);
            for (let [name, value] of datosFormulario) {
                console.log(`${name} ${value}`);
                let etiquetaP = document.createElement("p");
                etiquetaP.innerHTML = value;
                refEtiquetaCaixa.append(etiquetaP);
            }
            

        });
    }
}
const listaTarefas = async () => {
    // Lógica para listar tarefas
    let token = localStorage.getItem("token");
    let obxectoEnvio = {
        method: "GET",
        headers: {
            "Authorization": token
        }
    };

    const resposta = await fetch(endpoints.listaTarefas, obxectoEnvio);
    const tarefas = await resposta.json();
    //console.log("tarefas ?", tarefas);

    return tarefas;
}
const pintarListaTarefas = (tarefas) => {
    tarefas.rows.map((tarefa,index) => {
        //console.log("Tarefa:", tarefa);
        document.body.querySelector(".caixaTarefa").innerHTML += `<div><p contenteditable = "false" id="tarefa-${tarefa.ID_TAREFA}">${tarefa.DESCRICION}</p><button class="editar">Editar</button><button class="gardar">Gardar</button><button class="borrar">Borrar</button></div>`;
    });
}


const funcionBotonEditar = () => {
    const botonEditar = document.querySelectorAll(".editar");

    //console.log("botonEditar", botonEditar);
    botonEditar.forEach((boton) => {

        boton.addEventListener("click", async (e) => {
            e.preventDefault();
            let tarefa = e.target.parentElement.querySelector("p");
            tarefa.contentEditable = "true";
            tarefa.focus();
           

        })

       
    });
}

const funcionBotonGardar = () => {
    const botonGardar = document.querySelectorAll(".gardar");

    //console.log("botonGardar", botonGardar);
    botonGardar.forEach((boton) => {
        boton.addEventListener("click", async (e) => {
            e.preventDefault();
            
            
            let descripcion = e.target.parentElement.querySelector('p').textContent;
            let idTarefa = e.target.parentElement.querySelector('p').id.at(-1) ;
            console.log("idTarefa", idTarefa);
            /*const tarefa = document.getElementById(`tarefa-${index}`);
            console.log("tarefa", tarefa);
            tarefa.contentEditable = "false";*/
            //boton.textContent = "Editar";

            let datoRecibido = await EnvioDatosPUT({filasTabla: [{ID_TAREFA: idTarefa, DESCRICION: descripcion}]}, endpoints.actualizar);
            
            console.log("ACTUALIZADO ???", datoRecibido);
        });
    }); 
}

const funcionBotonBorrar = () => {
    const botonBorrar = document.querySelectorAll(".borrar");

    //console.log("botonBorrar", botonBorrar);
    botonBorrar.forEach((boton, index) => {
        boton.addEventListener("click", async () => {
            const tarefa = document.getElementById(`tarefa-${index}`);
            console.log("tarefa", tarefa);
            tarefa.parentElement.remove()
            //tarefa.remove();

            //let datoRecibido = await EnvioDatos({filasTabla: [{ID: index + 1}]}, endpoints.borrar);
            //console.log("datoRecibido ???", datoRecibido);
        });
    });
}
export async function Tarefas() {

    await pintarPaxina()
    await pintarTarefa()
    //const tarefas = await listaTarefas()
    pintarListaTarefas(await listaTarefas());
    funcionBotonEditar();
    funcionBotonGardar();
    funcionBotonBorrar();
    const sair = () => {
        console.log("sair");
        localStorage.removeItem("token");
        location.replace("/");
    }
    
    eventosCliente("#sair", sair);
}