import React, { useState } from "react";
import { Link } from "react-router-dom";


const Contacto = () => {
  // Define estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar el formulario,
    // como realizar una solicitud HTTP a un servidor o enviar un correo electrónico.

    // Después de enviar el formulario, puedes restablecer los campos
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div>
      <div className="fondo"></div>
      <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', marginTop: '30px' }}>
        Volver a la Página Principal
      </Link>
      
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '18px', fontWeight: 'bold' }}>CONTACTO</h1>
      <p className="letra">Utiliza este formulario para ponerte en contacto con nosotros:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p className="letra">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </p>
        </div>
        <div className="form-group">
          <p className="letra">
            <label htmlFor="email">Correo Electrónico:</label></p>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <p className="letra">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              className="form-control"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </p>
        </div>
        <p className="letra">
          <button type="submit" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Enviar Mensaje
          </button>
        </p>
      </form>
      <p className="letra">Además, puedes comunicarte con nosotros a través de:</p>
        <ul>
          <li className="letra">
            Correo Electrónico:{" "}
            <a href="mailto:veterinariacamacho@gmail.com">veterinariacamacho@gmail.com</a>
          </li>
          <li className="letra">
            Teléfono: <a href="tel:+50689717742">+506 8971 7742</a>
          </li>
        </ul>
              
    </div>
  );
};

export default Contacto;
