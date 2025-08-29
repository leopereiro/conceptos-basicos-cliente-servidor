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

/**const db = require("../../creo_bbdd.js");

const insertarDatosTarefa = (req, res) => {
  const { filasTabla } = req.body;
  const idUsuario = req.user?.id || 1; // se tes middleware isUser

  if (!Array.isArray(filasTabla)) {
    return res.status(400).json({ erro: "Formato incorrecto" });
  }

  let pendentes = filasTabla.length;
  let erros = [];

  for (const fila of filasTabla) {
    const { TITULO, DESCRICION } = fila;

    db.run(
      "INSERT INTO TAREFAS (TITULO, DESCRICION, ID_USUARIO) VALUES (?, ?, ?)",
      [TITULO, DESCRICION, idUsuario],
      function (err) {
        pendentes--;

        if (err) {
          console.error("Erro insertando:", err.message);
          erros.push(err.message);
        } else {
          console.log(`Tarefa gardada con id ${this.lastID}`);
        }

        if (pendentes === 0) {
          if (erros.length > 0) {
            res.status(500).json({ erro: "Algunhas tarefas non se gardaron", detalles: erros });
          } else {
            res.json({ mensaxe: "Tarefas gardadas correctamente" });
          }
        }
      }
    );
  }
};

module.exports = insertarDatosTarefa;**/
