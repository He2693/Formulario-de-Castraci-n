const Usuario = require("../models/user.model");
const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta"; // Debe ser la misma a lo largo de toda tu aplicación
const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario => {
            // Puedes poner el ID del usuario en la sesión 
             req.session.userId = usuario._id;
             req.session.userName = usuario.firstName;

            // Resto del código para crear el token y configurar la cookie
            const payload = {
                _id: usuario._id
            }

            const myJWT = jwt.sign(payload, secret_key);

            res.cookie("usertoken", myJWT, secret_key, {
                httpOnly: true // Esto significa que la cookie solo puede ser leída por el servidor
            }).json(usuario);
        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = (req, res) => {
    Usuario.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.json({ error: true, message: "El correo electrónico es incorrecto." });
        } else {
          bcrypt.compare(req.body.password, user.password)
            .then(passwordValid => {
              if (passwordValid) {
                const payload = {
                  _id: user._id
                }
  
                const myJWT = jwt.sign(payload, secret_key);
  
                // Configura la cookie y guarda el ID del usuario en la sesión 
                req.session.userId = user._id;
                req.session.userName = user.firstName;
  
                // Imprime el valor de req.session.userName si está disponible
                console.log("Valor de req.session.userName:", req.session.userName);
  
                res
                  .cookie("usertoken", myJWT, secret_key, {
                    httpOnly: true
                  })
                  .json({ error: false, message: "Inicio de sesión correcto", userId: req.session.userId});
  
              } else {
                res.json({ error: true, message: "La contraseña es incorrecta." });
              }
            })
        }
      })
  }
  


module.exports.logout = (req, res) => {
    // Borra la cookie y elimina el ID del usuario de la sesión si lo deseas
    // Ejemplo:
     delete req.session.userId;
    res.clearCookie('usertoken');
    res.json({ message: "Salimos de sesión!" });
}


// Obtener una usuario específica por su ID
module.exports.get_Usuario = (req, res) => {
    Usuario.findOne({ _id: req.params.id })
        .then(usuario => res.json(usuario))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Error al obtener el usuario." });
        });
}

