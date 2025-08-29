const db = require("../../creo_bbdd.js");
const jwt = require('jsonwebtoken');
const accesoUser = (req, res) => {
    const {nome, email} = req.body;// desesctructura o obxeto de entrada
    console.log(nome, email);

    let resposta = {}
    
    db.get("SELECT ID_USUARIO,NOME_USUARIO, MAIL_USUARIO, ROL_USUARIO FROM USUARIOS WHERE NOME_USUARIO = ? AND MAIL_USUARIO = ?", [req.body.nome, req.body.email], (err, row) => {
    if (err) {
        console.error(err.message);
        return res.status(500).send("Error interno");
    }
    if (row) {
        // Usuario encontrado
        req.body.rol = row.ROL_USUARIO;
        let condicionAdmin = req.body.rol == 'admin';
        if (condicionAdmin) {
            const tokenUsuario = jwt.sign({ usuario: req.body.nome, email: req.body.email, id: row.ID_USUARIO }, process.env.SEGREDO);
            res.status(200).send({ resposta: "acesso autorizado", tokenUsuario });// res.status(200).send(row)
        } else {
            const tokenUsuario = jwt.sign({ usuario: req.body.nome, email: req.body.email, id: row.ID_USUARIO }, process.env.SEGREDO);
            res.status(200).send({ resposta: "acesso autorizado tarefas", tokenUsuario });
        }
    } else {
        // Usuario no encontrado
        res.status(401).send({ resposta: "Usuario o contraseña incorrectos" });
    }
});
    /**db.get("SELECT NOME_USUARIO, MAIL_USUARIO, ROL_USUARIO FROM USUARIOS WHERE NOME_USUARIO = ? AND MAIL_USUARIO = ?", [req.body.nome, req.body.email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error interno");
        }
        if (row) {
            // O USUARIO XA ESTÁ REGISTRADO
            console.log("Usuario encontrado:", row);
            req.body.rol = row.ROL_USUARIO;
            console.log("Rol de usuario:", req.body.rol);
        }

        console.log("req.body.rol antes ", req.body.rol);
        let condicionAdmin = req.body.rol == 'admin';
        console.log("condicionAdmin ", condicionAdmin, req.body.rol);
        if(condicionAdmin){
            // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
            const tokenUsuario = jwt.sign({usuario: req.body.nome,email:req.body.email},process.env.SEGREDO)
            console.log("tokenUSer ",tokenUsuario)
            resposta.resposta = "acesso autorizado";
            resposta.tokenUsuario = tokenUsuario
                console.log("entro en ADMIN")     
            res.status(200).send(resposta);

            } else {
                    // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
                    console.log("entra en if ????")
                    const tokenUsuario = jwt.sign({usuario: req.body.nome,email:req.body.email},process.env.SEGREDO)
                    console.log("tokenUSer ",tokenUsuario)
                    resposta.resposta = "acesso autorizado tarefas";
                    resposta.tokenUsuario = tokenUsuario
                    console.log("entro en USUARIO")
                    res.status(200).send(resposta);
            
            }
    });
    **/
    
     
}

module.exports = accesoUser;