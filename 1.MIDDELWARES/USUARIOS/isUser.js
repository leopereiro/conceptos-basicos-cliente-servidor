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