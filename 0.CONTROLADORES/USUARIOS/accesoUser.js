const jwt = require('jsonwebtoken');
const accesoUser = (req, res) => {
    const {nome, email} = req.body;// desesctructura o obxeto de entrada
    console.log(nome, email);

    // ESTA CONDICIÓN FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    // O LOGUEO DO USUARIO
    let condicionUsuarioCorrecto = req.body.nome == 'Leo' && req.body.email == 'leo@leo.com';

    let datoEnviadoCondicionUsuarioCorrecto = {}
    
    let datoEnviadoEnErro = {resposta:"faltan campos ou usuario non rexistrado"}


    if(condicionUsuarioCorrecto){
        // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
        const tokenUsuario = jwt.sign({usuario: req.body.nome,email:req.body.email},process.env.SEGREDO)
        console.log("tokenUSer ",tokenUsuario)
        datoEnviadoCondicionUsuarioCorrecto.resposta = "acesso autorizado";
        datoEnviadoCondicionUsuarioCorrecto.tokenUsuario = tokenUsuario
                   
        res.send(datoEnviadoCondicionUsuarioCorrecto);
    }else{
        res.send(datoEnviadoEnErro); 
    }
     
}

module.exports = accesoUser;