import {endpoints} from "../datos.js"

export async function AccesoUsuario() {
    botonEnviar.addEventListener("click",async (e)=>{
            e.preventDefault();
            //const {nome, email} = formulario;// desesctructura o obxeto de entrada
            //console.log(nome.value, email.value);// imprime os valores do formulario

            let datosFormulario = new FormData(formulario);
            let entradas = Object.fromEntries(datosFormulario.entries());
            
            console.log(JSON.stringify(entradas))
            
            let obxetoEnvio = {
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(entradas)
            }
            let respostaServer = await fetch(endpoints.acceso, obxetoEnvio) 

            let resposta = await respostaServer.json();

            //console.log("resposta ????",resposta.tokenUsuario);
            //console.log("resposta ????",resposta.resposta);
            if(resposta.resposta === "acesso autorizado"){
                console.log("iremos a app")
                localStorage.setItem("token",resposta.tokenUsuario)
                location.replace("/app");//GET
            }else if (resposta.resposta === "acesso autorizado tarefas") {
                    console.log("iremos a tarefas")
                    localStorage.setItem("token",resposta.tokenUsuario)
                    location.replace("/tarefas");

            }else{
                console.log(resposta.resposta);
                mensagem.innerHTML = resposta.resposta;
            }
        })
}