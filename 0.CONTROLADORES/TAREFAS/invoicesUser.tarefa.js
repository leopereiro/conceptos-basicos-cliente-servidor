const db = require("../../creo_bbdd.js");

const invoicesUser = (req,res) => {

  let valor = db.all("select * from TAREFAS",(err, filas) => {
    let valor = 1;
            if (err) {
                throw err;
            }
            console.log(filas)
    
          res.send(filas)
    return valor
        })
  console.log("invoicesUser valor  ",valor)
}

module.exports = invoicesUser