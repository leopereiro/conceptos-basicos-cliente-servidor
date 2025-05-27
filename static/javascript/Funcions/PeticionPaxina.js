export async function PeticionPaxina(){
    let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)
                const peticion = await fetch("/paxina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                const paxinaText = await peticion.text()
                console.log("paxina ?",paxinaText)
                document.body.innerHTML = paxinaText;

                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}