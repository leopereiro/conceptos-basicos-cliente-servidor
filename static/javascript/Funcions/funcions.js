import {EnvioDatos} from "./EnvioDatos.js"
export function eventosCliente(referencia,funcion) {
    const referenciaHtml = document.querySelector(`${referencia}`);
    console.log("referenciaHtml ?", referenciaHtml)
    referenciaHtml.addEventListener("click", funcion)
}

/**export const insercionUsers = (endpoints) => {
    envio.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("formulario");
        let datosFormulario = new FormData(envio);
        let refEtiquetaCaixa = document.querySelector(".caixa");
        console.log(
            "datosFormulario ",
            datosFormulario.entries(),
            Object.fromEntries(datosFormulario.entries())
        );
        let outra = "3";
        let otros = `${endpoints.creousuario}/?variable=${outra}`


        let datoRecibido = await EnvioDatos(Object.fromEntries(datosFormulario.entries()),endpoints.creousuario);
        
        console.log("datoRecibido ???", datoRecibido)


        for (let [name, value] of datosFormulario) {
            console.log(`${name} ${value}`);
            let etiquetaP = document.createElement("p");
            etiquetaP.innerHTML = value;
            refEtiquetaCaixa.append(etiquetaP);
            }
    });
}**/

export const insercionUsers = (endpoints) => {
    const envio = document.getElementById("envio");
    if (!envio) return;

    envio.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("formulario");
        let datosFormulario = new FormData(envio);
        let refEtiquetaCaixa = document.querySelector(".caixa");
        console.log(
            "datosFormulario ",
            datosFormulario.entries(),
            Object.fromEntries(datosFormulario.entries())
        );

        let datoRecibido = await EnvioDatos(Object.fromEntries(datosFormulario.entries()), endpoints.creousuario);
        console.log("datoRecibido ???", datoRecibido);

        for (let [name, value] of datosFormulario) {
            console.log(`${name} ${value}`);
            let etiquetaP = document.createElement("p");
            etiquetaP.innerHTML = value;
            refEtiquetaCaixa.append(etiquetaP);
        }
    });
}