const Mascota = require("../models/mascota.model");

// Obtener todas las mascotas de un usuario específico
module.exports.get_all = (req, res) => {
    // Obtén el ID del usuario de la sesión
    const userId = req.session.userId; // Asegúrate de que esto coincida con tu configuración de sesión

    // Consulta las mascotas del usuario específico
    Mascota.find({ propietario: userId }).sort({ nombre: 1 })
        .then(mascotas => res.json(mascotas))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Error al obtener las mascotas del usuario" });
        });
}

// Crear una nueva mascota para el usuario actual
module.exports.create_Mascota = (req, res) => {
    // Obtén el ID del usuario de la sesión
    const userId = req.session.userId; // Asegúrate de que esto coincida con tu configuración de sesión
    
    // Agrega el ID del propietario al objeto de mascota
    req.body.propietario = userId;

    // Crea la mascota
    Mascota.create(req.body)
        .then(mascota => res.json(mascota))
        .catch(err => {
            // Validación de datos en el modelo de Mascota
            if (err.name === 'ValidationError') {
                res.status(400).json({ error: "Error de validación. Comprueba los campos." });
            } else {
                console.error(err);
                res.status(500).json({ error: "Error al crear la mascota" });
            }
        });
}

// Obtener una mascota específica por su ID
module.exports.get_Mascota = (req, res) => {
    Mascota.findOne({ _id: req.params.id })
        .then(mascota => res.json(mascota))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Error al obtener la mascota" });
        });
}

module.exports.get_MascotasPorUsuario = (req, res) => {
    const idUsuario = req.params.idUsuario;
    Mascota.find({ idUsuario: idUsuario })
      .then(mascotas => res.json(mascotas))
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Error al obtener las mascotas del usuario" });
      });
  }
  

// Actualizar una mascota específica por su ID
module.exports.update_Mascota = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Mascota.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(mascota => res.json(mascota))
        .catch(err => {
            // Validación de datos en el modelo de Mascota
            if (err.name === 'ValidationError') {
                res.status(400).json({ error: "Error de validación. Comprueba los campos." });
            } else {
                console.error(err);
                res.status(500).json({ error: "Error al actualizar la mascota" });
            }
        });
}

// Eliminar una mascota específica por su ID
module.exports.delete_Mascota = (req, res) => {
    Mascota.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Error al eliminar la mascota" });
        });
}
