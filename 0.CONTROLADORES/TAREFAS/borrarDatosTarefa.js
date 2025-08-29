const db = require("../../creo_bbdd.js");
const borrarDatosTarefa = (req,res,next) =>{
  const {filasTabla} = req.body;
  console.log("req.idUser", req.idUser)
  try{
      for (const obxeto in filasTabla) {
        console.log(Object.values(filasTabla[obxeto]));
        let arrayDatos = Object.values(filasTabla[obxeto])
        arrayDatos.push(req.idUser) // id usuario
        console.log('....', arrayDatos);

        // [req.idUser]
        db.run("INSERT INTO TAREFAS(TITULO,DESCRICION,ID_USUARIO) VALUES (?,?,?)",arrayDatos,(err) => {
                  if (err) {
                      throw err;
                  }

                 console.log(`A row has been inserted with rowid ${req.idUser}`);
              })
      }
  }catch(error){
      //throw error
      console.error("Erro insertando:", error.message);
  }/*finally{
    //db.close()
    res.send({mensaxe:"datos insertados?"})
  }*/
  res.send({mensaxe:"datos insertados?"})
}

module.exports = borrarDatosTarefa;
