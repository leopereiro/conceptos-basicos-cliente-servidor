const db = require("../../creo_bbdd.js");
const insertarDatosTarefa = (req,res,next) =>{
  const {filasTabla} = req.body;

  try{
      for (const obxeto in filasTabla) {
        console.log(Object.values(filasTabla[obxeto]));
        db.run("INSERT INTO TAREFAS(ID_TAREFA,TITULO,DESCRICION) VALUES (?,?,?)",Object.values(filasTabla[obxeto]),(err) => {
                  if (err) {
                      throw err;
                  }
                 console.log(`A row has been inserted with rowid ${this.lastID}`);
              })
      }
  }catch(error){
      throw error
  }finally{
    //db.close()
    res.send({mensaxe:"datos insertados?"})
  }
}

module.exports = insertarDatosTarefa;