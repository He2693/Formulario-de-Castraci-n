import React from "react";
import { Link } from "react-router-dom";
import banner3 from "./imagenes/banner3.jpg";

const Informacion = () => {
  return (
    <div className="informacion-container">
      <div className="fondo"></div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '60px', fontWeight: 'bold' }}>INFORMACIÓN</h1>
      <p className="letra" style={{ textAlign: 'justify' }}>
        Bienvenido a nuestra campaña de castración. Aquí encontrarás información
        importante sobre el proceso de castración de mascotas y cómo puedes
        participar.
      </p>
      <p className="letra" style={{ textAlign: 'justify' }}>
        La castración es una medida importante para el control de la población
        de mascotas y puede tener beneficios para la salud y el comportamiento
        de tu mascota. Si deseas obtener más información o participar en nuestra
        campaña, no dudes en ponerte en contacto con nosotros.
      </p>
      <p className="letra" style={{ textAlign: 'justify' }}>
        Estamos comprometidos a brindar el mejor cuidado a las mascotas y
        promover prácticas responsables de tenencia de mascotas.
      </p>
      {/* Agrega un botón para volver a la página principal */}
      <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
        Volver a la Página Principal
      </Link>
      <img
        src={banner3} // Utiliza la variable con la ruta de tu imagen
        alt="Mascota" style={{
          display: 'block', // Cambia la propiedad float a display
          borderRadius: '50%',
          opacity: '0.9',
          position: 'relative',
          top: '-70px', // Mueve la imagen hacia arriba
          margin: 'auto' // Centra horizontalmente la imagen
        }}
      />
    </div>
  );
};

export default Informacion;

