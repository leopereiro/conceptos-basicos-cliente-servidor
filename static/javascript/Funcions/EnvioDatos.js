export const adaptoToken = ()=>{
  
  return JSON.stringify(localStorage.getItem("token"))
}

export const EnvioDatos = async (datos,endpoint)=>{
    let datoEnviado = {
    method:'POST',
    headers:{
      "Authorization": adaptoToken(),
      "Content-type":"application/json"
    },
    body:JSON.stringify(datos)
  }
  let datosRecibido = await fetch(endpoint,datoEnviado); // delete
  let datosRecibidoJson = await datosRecibido.json();
   console.log("datosRecibido.json() EnvioDatos",datosRecibidoJson)
  return datosRecibidoJson;
}