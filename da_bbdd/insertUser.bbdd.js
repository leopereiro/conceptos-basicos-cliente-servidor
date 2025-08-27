const db = require("../creo_bbdd.js");
function inserto(datos) {
    const { user_mail, user_nome } = datos;

    db.run(
        `INSERT INTO USUARIOS(NOME_USUARIO, MAIL_USUARIO) values (?,?)`,
        [user_nome, user_mail],
        function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`inserta ${this.lastID}`);
        },
    );
}

module.exports = inserto;