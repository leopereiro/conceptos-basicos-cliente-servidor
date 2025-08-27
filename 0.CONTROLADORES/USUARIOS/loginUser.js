const db = require("../../creo_bbdd.js");
let jwt = require('jsonwebtoken');
const loginUser = (req, res) => {

  const { user_mail, user_nome } = req.body;

  console.log("user_mail, user_nome ",user_mail, user_nome)

  db.get("select * from USUARIOS WHERE NOME_USUARIO = ? and MAIL_USUARIO = ?", [user_nome,user_mail], (err, row) => {
    if (err) {
      res.status(500).json({ error: "Error al realizar la consulta" });
      return;
    }

    if (!row) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }
    // INTRODUCIMOS UNHA CONDICIÓN QUE NOS ASEGURA QUE SELECCIONAMOS O USUARIO CORRECTO
      if (user_nome == row.NOME_USUARIO && user_mail == row.MAIL_USUARIO) {
        let datoParaEncriptar = {
          nome:row.NOME_USUARIO,
          mail:row.MAIL_USUARIO,
          id:row.ID_USER
        };
        console.log("datoParaEncriptar ",datoParaEncriptar,'process.env.SEGREDO ',process.env.SEGREDO)

          let token = jwt.sign({user: datoParaEncriptar},process.env.SEGREDO)
          console.log('O dato que envía é o código encriptado en jwt, que chamamos token', token)
          res.send({
                    estado: "ok",
                    usuario: token,
                  });
      };

  });

};

module.exports = loginUser