import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DiayHora from "./DiayHora";
import { Link } from "react-router-dom";
import "./styles.css"; // Asegúrate de importar tus estilos CSS
import { UserId } from "./globals";

const DatosMascota = () => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [especie, setEspecie] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [errores, setErrores] = useState({});
  const [fechaCastracion, setFechaCastracion] = useState("");
  const [idUsuario, setIdUsuario] = useState(UserId);
  const [archivoValido, setArchivoValido] = useState(true); // Nuevo estado
  const [guardadoExitoso, setGuardadoExitoso] = useState(false); // Estado para la alerta

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 20 * 1024 * 1024; // Tamaño máximo en bytes (20MB en este ejemplo)

    if (file && file.size > maxSize) {
      setArchivoValido(false); // Deshabilita el archivo si es demasiado grande
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setImagen(imageUrl);
      };
      reader.readAsDataURL(file);
      setArchivoValido(true); // Habilita el archivo si es válido
    }
  };

  const guardarMascota = (e) => {
    e.preventDefault();
    if (!archivoValido) {
      return; // Evita enviar la solicitud si el archivo no es válido
    }

    axios
      .post("http://localhost:8000/api/mascota", {
        nombre,
        imagen,
        especie,
        peso,
        edad,
        fechaCastracion,
        idUsuario
      })
      .then(res => {
        console.log("Guardado exitoso:", res.data); // Agrega este log para verificar la respuesta exitosa
        setGuardadoExitoso(true);

        // Agrega un tiempo de espera de, por ejemplo, 3 segundos antes de redirigir
        setTimeout(() => {
          navigate("/");
        }, 3000); // 3000 milisegundos (3 segundos)
      })
      .catch((err) => {
        console.error("Error al guardar:", err); // Agrega este log para verificar el error
        setErrores(err.response.data.errors);
      });
  }

  return (
    <div>
      <div className="fondo"></div>
      <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', marginTop: '30px' }}>
        Volver a la Página Principal
      </Link>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px', fontWeight: 'bold' }}>Datos de su Mascota</h1>


      <form onSubmit={guardarMascota}>
        <div>
          <p className="letra style">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={nombre} className="form-control" onChange={e => setNombre(e.target.value)} />
            {errores.nombre ? <p className="error-message">{errores.nombre}</p> : null}
          </p>
        </div>
        <div>
          <p className="letra style">
            <label htmlFor="imagen">Imagen:</label>
            <input type="file" id="imagen" name="imagen" onChange={handleFileChange} />
            {imagen && <img className="img-fluid" alt="Mascota" src={imagen} />}
            {archivoValido === false && <p className="error-message">El archivo es demasiado grande. Debe ser menor de 20MB.</p>}
          </p>
        </div>
        <div>
          <p className="letra style">
            <label htmlFor="especie">Especie:</label>
            <input type="text" id="especie" name="especie" value={especie} className="form-control" onChange={e => setEspecie(e.target.value)} />
            {errores.especie ? <p className="error-message">{errores.especie}</p> : null}
          </p>
        </div>
        <div>
          <p className="letra style">
            <label htmlFor="peso">Peso:</label>
            <input type="text" id="peso" name="peso" value={peso} className="form-control" onChange={e => setPeso(e.target.value)} />
            {errores.peso ? <p className="error-message">{errores.peso}</p> : null}
          </p>
        </div>
        <div>
          <p className="letra style">
            <label htmlFor="edad">Edad:</label>
            <input type="text" id="edad" name="edad" value={edad} className="form-control" onChange={e => setEdad(e.target.value)} />
            {errores.edad ? <p className="error-message">{errores.edad}</p> : null}
          </p>
        </div>
        <div>
          <p className="letra style">
            <label htmlFor="fechaCastracion">Fecha de Castración:</label>
            <DiayHora
              selected={fechaCastracion}
              onChange={(date) => setFechaCastracion(date)} />
            {errores.fechaCastracion ? <p className="error-message">{errores.fechaCastracion}</p> : ""}
          </p>
        </div>
        
        {guardadoExitoso && (
          <div className="alert alert-success" style={{ fontWeight: 'bold', backgroundColor: "teal", color: 'white', fontSize: '25px', marginRight: '10px', height: "50px", width: "400px", padding: "5px 10px" }} role="alert">
            ¡Guardado con éxito!
          </div>
        )}
        <input type="submit" className="btn btn-success mt-3" style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px' }} value="Guardar" />

      </form>
    </div>
  );
};

export default DatosMascota;
