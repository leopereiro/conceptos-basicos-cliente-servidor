const jwt = require('jsonwebtoken');
const accesoUser = (req, res) => {
    const {nome, email} = req.body;// desesctructura o obxeto de entrada
    console.log(nome, email);

    // ESTA CONDICIÓN FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    // O LOGUEO DO USUARIO
    let condicionAdminOk = req.body.nome == 'Leo' && req.body.email == 'leo@leo.com';
    req.body.rol = 'admin';
    let resposta = {}
    
    let datoEnviadoEnErro = {resposta:"faltan campos ou usuario non rexistrado"}

    let novoUsuario = req.body.nome == 'Ivan' && req.body.email == 'ivan@ivan.com';


    if(condicionAdminOk && req.body.rol == 'admin'){
        // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
        const tokenUsuario = jwt.sign({usuario: req.body.nome,email:req.body.email},process.env.SEGREDO)
        console.log("tokenUSer ",tokenUsuario)
        resposta.resposta = "acesso autorizado";
        resposta.tokenUsuario = tokenUsuario
                   
        res.send(resposta);

        } else if (novoUsuario) {
                // ENVIO O USUARIO ENCRIPTADO -- SECRETO 
                console.log("entra en if ????")
        const tokenUsuario = jwt.sign({usuario: req.body.nome,email:req.body.email},process.env.SEGREDO)
        console.log("tokenUSer ",tokenUsuario)
        resposta.resposta = "acesso autorizado tarefas";
        resposta.tokenUsuario = tokenUsuario
                   
        res.send(resposta);
        
        }else{
        res.send(datoEnviadoEnErro); 
    }
     
}

module.exports = accesoUser;