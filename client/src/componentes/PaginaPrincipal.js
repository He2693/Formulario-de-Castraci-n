import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./PaginaPrincipal.css"; // Importa el archivo de estilos CSS personalizado
import "./styles.css"; // Importa el archivo CSS con los estilos
import "./Navbar.css"; // Importa el archivo CSS con los estilos
import { formatearFechaYHora } from "./formatDate";
import { UserId, UserName } from "./globals";

// Importa las imágenes aquí
import banner2 from "./imagenes/banner2.jpg";
import banner11 from "./imagenes/banner11.jpg";

const PaginaPrincipal = () => {
  const [mascota, setMascota] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [imageSrc, setImageSrc] = useState(banner2); // Estado para la imagen
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    // Obtener datos de la mascota directamente por el código de usuario (UserId)
    axios
      .get(`http://localhost:8000/api/mascotaUser/${UserId}`, { withCredentials: true })
      .then((res) => {
        setMascota(res.data);
      })
      .catch((err) => {
        console.log("Error en la solicitud:", err);
        if (err.response && err.response.status === 401) {
          navigate("/login");
        }
      });
  }, [navigate]);


  
  const borrarMascota = (id) => {
    axios.delete("http://localhost:8000/api/mascota/" + id).then((res) => {
      let nuevaLista = mascota.filter((m) => m._id !== id);
      setMascota(nuevaLista);
    });
  };

  const cerrarSesion = () => {
    axios
      .get("http://localhost:8000/api/logout", { withCredentials: true })
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
  };

  // Función para cambiar la imagen al pasar el cursor
  const cambiarImagen = () => {
    setImageSrc(banner11);
  };

  // Función para volver a la imagen original al quitar el cursor
  const restaurarImagen = () => {
    setImageSrc(banner2);
  };

  return (

    <div className="pagina-principal">

      <nav className="navbar" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 25px", position: "relative" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "40px", position: "relative", zIndex: "1" }}>
          <li className="nav-item">
            <Link to="/recomendaciones" style={{ backgroundColor: "teal", color: 'white', fontSize: '25px', marginRight: '10px', height: "50px", padding: "5px 10px" }}>
              Recomendaciones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/informacion" style={{ backgroundColor: "teal", color: 'white', fontSize: '25px', marginRight: '10px', height: "50px", padding: "5px 10px" }}>
              Información
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" style={{ backgroundColor: "teal", color: 'white', fontSize: '25px', marginRight: '10px', height: "50px", padding: "5px 10px" }}>
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/consejos" style={{ backgroundColor: "teal", color: 'white', fontSize: '25px', marginRight: '10px', height: "50px", padding: "5px 10px" }}>
              Consejos
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn- float-right" onClick={cerrarSesion} style={{ backgroundColor: "teal", color: 'white', fontWeight: 'bold', fontSize: '25px' }}>
              Cerrar Sesión
            </button>
          </li>
          <li className="nav-item">
          <p style={{ backgroundColor: "teal", color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Usuario: { UserId }</p>
          </li>
          


        </ul>
        <li className="nav-image" style={{ borderRadius: "50%", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: "0.9", backgroundSize: "cover", padding: "0", height: "280px", zIndex: "0" }}>
          <img
            src={imageSrc}
            alt="Imagen de navegación"
            onMouseOver={cambiarImagen} // Cambia la imagen al pasar el cursor
            onMouseOut={restaurarImagen} // Vuelve a la imagen original al quitar el cursor
            style={{ height: "150%", width: "auto", borderRadius: "70%" }} // Asegúrate de que la imagen ocupe todo el espacio disponible
          />
        </li>
      </nav>
      <div className="fondo"></div>
      <div className="descripcion">
        <h2 style={{ fontWeight: 'bold', fontSize: '55px', textAlign: "center", marginBottom: '30px', marginTop: '310px' }}>Bienvenido a nuestra Campaña de Castración</h2>
      </div>
      <div className="instrucciones">
        <h2 style={{ fontWeight: 'bold', fontSize: '35px' }}>Instrucciones de Uso: </h2>
        <p style={{ color: 'black', fontSize: '30px', textAlign: 'justify' }}>
          Para registrar a su mascota en la campaña de castración, haga clic en el botón "Registre a su Mascota" a continuación.
          Luego, complete el formulario con los detalles de su mascota y programe una cita de castración
          en la fecha y hora que mejor le convenga. Después de realizar el registro, la información guardada
          se mostrara aquí en la página principal.
        </p>
      </div>
      <Link to="/nuevo" className="btn btn-success" style={{ backgroundColor: "teal", color: 'white', fontSize: '30px', marginBottom: '25px' }}>
        Registre a su Mascota
      </Link>

      <div className="contenido">
        <p className="informacion-texto"></p>
        
        {mascota.map((mascota, index) => (
          <div key={index} className="informacion-texto">
            <img src={mascota.imagen} alt="mascota" className="img-fluid" style={{ marginBottom: '30px' }} />
            <p style={{ fontWeight: 'bold', fontSize: '40px', marginBottom: '20px' }}>  {mascota.nombre}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: "48%", padding: "10px" }}>
                <p>Especie:  {mascota.especie}</p>
                <p>Peso:  {mascota.peso}</p>
                <p>Edad:  {mascota.edad}</p>
              </div>
              <div style={{ width: "48%", padding: "10px" }}>
                <div style={{ fontSize: '30px', width: "48%", padding: "10px" }}>
                  <p>Fecha de Castración: {formatearFechaYHora(new Date(mascota.fechaCastracion))}</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link to={`/editar/${mascota._id}`} className="btn btn-warning" style={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '30px', marginRight: '65px', }}>
                Editar
              </Link>
              <button className="btn btn-danger" onClick={() => borrarMascota(mascota._id)} style={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '30px', marginRight: '65px' }}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaPrincipal;

