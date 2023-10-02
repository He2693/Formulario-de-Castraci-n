import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo de estilos CSS
import "./styles.css"; // Importa el archivo CSS con los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/recomendaciones">Recomendaciones</Link>
        </li>
        <li className="nav-item">
          <Link to="/informacion">Información</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link to="/consejos">Consejos</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
