/**const jwt = require('jsonwebtoken');
const isUser = (req, res,next) => {

    const { authorization } = req.headers;
   
    if (!authorization) {
            throw new Error("Falta cabeceira de autorización", 401);
    }

    // ESTA CONDICIÓN FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    // O LOGUEO DO USUARIO

    
    let datoEnviadoEnErro = {resposta:"Usuario o contraseña incorrectos"}

    const desencriptoUser = jwt.verify(authorization,process.env.SEGREDO);
    
    //console.log("desencriptoUser ",desencriptoUser)
    const {usuario, email} = desencriptoUser;
    console.log("isUser usuario ",usuario )
    console.log("isUser email ",email )
    let condicionAdmin = usuario == 'Leo' && email == 'leo@leo.com';
    let novoUsuario = usuario == 'Ivan' && email == 'ivan@ivan.com';

    if(condicionAdmin || novoUsuario){       
        next()
    }else if(usuario === null || email === null || email === undefined || usuario === undefined){
        //throw new HttpError("Usuario o contraseña incorrectos", 403);
        res.send(datoEnviadoEnErro); 
    }
     
}

module.exports = isUser;**/

const jwt = require('jsonwebtoken');
const isUser = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ resposta: "Falta cabeceira de autorización" });
    }

    let datoEnviadoEnErro = { resposta: "Usuario o contraseña incorrectos" };

    try {
        const desencriptoUser = jwt.verify(authorization, process.env.SEGREDO);
        const { usuario, email, id } = desencriptoUser;
        req.idUser = id; // Engado o ID do usuario á req para usalo despois
        if (usuario && email && id) {
            next();
        } else {
            res.status(403).send(datoEnviadoEnErro);
        }
    } catch (e) {
        res.status(403).send(datoEnviadoEnErro);
    }
};

module.exports = isUser;