import LoginRegistro from './componentes/LoginRegistro';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import DatosMascota from './componentes/DatosMascota';
import DiayHora from './componentes/DiayHora';
import ActualizarMascota from './componentes/ActualizarMascota';
import { Routes, Route } from 'react-router-dom';
import Recomendacion from "./componentes/Recomendacion";
import Informacion from "./componentes/Informacion";
import Contacto from "./componentes/Contacto";
import Consejos from "./componentes/Consejos";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" exact element={<LoginRegistro />} />
        <Route path="/" exact element={<PaginaPrincipal />} />
        <Route path="/nuevo" exact element={<DatosMascota />} />
        <Route path="/horario" exact element={<DiayHora />} />
        <Route path="/editar/:id" exact element={<ActualizarMascota />} />
        <Route path="/recomendaciones" exact element={<Recomendacion />} />
        <Route path="/informacion" exact element={<Informacion />} />
        <Route path="/contacto" exact element={<Contacto />} />
        <Route path="/consejos" exact element={<Consejos />} />
      </Routes>
    </div>
  )
}

export default App;
