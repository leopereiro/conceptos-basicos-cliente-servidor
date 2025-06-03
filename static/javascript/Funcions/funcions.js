export function eventosCliente(referencia,funcion) {
    const referenciaHtml = document.querySelector(`${referencia}`);
    console.log("referenciaHtml ?", referenciaHtml)
    referenciaHtml.addEventListener("click", funcion)
}