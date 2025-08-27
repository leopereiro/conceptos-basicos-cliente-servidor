const { inserto } = require("../../da_bbdd");


const newUser = (req, res) => {
  const { user_mail, user_nome} = req.body;

  let condicion =
    user_mail != "" &&
    user_nome != "";
  let mensajeEnviado = {};
  if (condicion) {
    // CREAMOS USUARIO
    inserto(req.body);
    mensajeEnviado.estado = "ok";
    mensajeEnviado.mensaje = "usuario creado";

  } else {
    mensajeEnviado.estado = "ok";
    mensajeEnviado.mensaje = "usuario no creado";
  }
  res.send(mensajeEnviado);
};

module.exports = newUser;