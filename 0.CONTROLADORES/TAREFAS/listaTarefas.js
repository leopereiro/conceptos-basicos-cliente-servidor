const db = require("../../creo_bbdd.js");
const listaTarefas = (req,res) =>{
 
  try{
      db.all("SELECT * FROM TAREFAS WHERE ID_USUARIO = ?",[req.idUser],(err, rows) => {
                  if (err) {
                      throw err;
                  }

                 res.send({rows});
              })
  }catch(error){
      //throw error
      console.error("Erro insertando:", error.message);
  }
  
}

module.exports = listaTarefas;