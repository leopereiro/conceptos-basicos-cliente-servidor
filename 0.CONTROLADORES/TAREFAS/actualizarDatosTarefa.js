const db = require("../../creo_bbdd.js");
const actualizarDatosTarefa = (req,res,next) =>{
  const {tarefa} = req.body;
  console.log("req.body", req.body);
  console.log("req.idUser", req.idUser);
  console.log("req.body.filasTabla[0].ID_TAREFA", req.body.filasTabla[0].ID_TAREFA);
  console.log("req.body.filasTabla[0].DESCRICION", req.body.filasTabla[0].DESCRICION);
  try{
      db.run("UPDATE TAREFAS SET DESCRICION = ? WHERE ID_USUARIO = ? and ID_TAREFA = ?", [req.body.filasTabla[0].DESCRICION, req.idUser, req.body.filasTabla[0].ID_TAREFA], (err) => {
                  if (err) {
                      throw err;
                  }

                 console.log(`A row has been updated with rowid ${req.idUser}`);
              })
        res.send({mensaxe:"datos actualizados"})
  }catch(error){
      //throw error
      console.error("Erro insertando:", error.message);
  }
// res.send({mensaxe:"datos actualizados"})
}

module.exports = actualizarDatosTarefa;
