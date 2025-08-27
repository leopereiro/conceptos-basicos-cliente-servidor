/*const fs = require("node:fs");
const path = require("path");
const options = { recursive: true };
const folderUser = (req,res,next) =>{
  req.body.id = 4;// ISTO VAI CORRESPONDER O 'ID' DO USUARIO DA BASE DE DATOS
  //console.log('creoFolder path.join(__dirname, folderName) ',path.join(__dirname, folderName + `/usuario${req.body.id}/`))
  try{
    fs.mkdir(path.join(__dirname, '../Users' + `/usuario${req.userAuth.user.id}/`),options,
        (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
            next()
        }
    );
  }catch(err){
    console.error(err);
    throw err
  }
}

module.exports = folderUser;*/