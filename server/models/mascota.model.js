mongoose = require("mongoose");

const mascotaSchema = new mongoose.Schema(
    {
      nombre: {
        type: String,
        required: [true, "Nombre no puede estar vacío"]
      },
      imagen: {
        type: String,
        required: [true, "Imagen no puede estar vacío"]
      },
      especie: {
        type: String,
        required: [true, "Especie no puede estar vacío"]
      },
      peso: {
        type: String,
        required: [true, "Peso no puede estar vacío"]
      },
      edad: {
        type: String,
        required: [true, "Edad no puede estar vacío"]
      },
      fechaCastracion: {
        type: Date, // El tipo Date almacena fecha y hora
        required: false, // Puedes cambiar esto a true si la fecha de castración es obligatoria
      },
      idUsuario: {
        type: String,
        required: [true, "IdUsuario no puede estar vacío"]
      },
    },
    { timestamps: true, versionKey: false }
  );

const mascota = mongoose.model("mascota", mascotaSchema);
module.exports = mascota;