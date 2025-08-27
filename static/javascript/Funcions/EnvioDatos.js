export const adaptoToken = (endpointserver)=>{
  let autorizacion = endpointserver
  
  return autorizacion = (endpointserver == "acceso") ? JSON.stringify(localStorage.getItem("token")) : localStorage.getItem("token")
}


export const EnvioDatos = async (datos,endpointserver)=>{
  
    let datoEnviado = {
    method:'POST',
    headers:{
      "Authorization": adaptoToken(endpointserver),
      "Content-type":"application/json"
    },
    body:JSON.stringify(datos)
  }
  console.log("endpointserver ???", endpointserver)
  let datosRecibido = await fetch(endpointserver,datoEnviado); // delete
  let datosRecibidoJson = await datosRecibido.json();
  console.log("datosRecibido.json() EnvioDatos",datosRecibidoJson)
  return datosRecibidoJson;
}