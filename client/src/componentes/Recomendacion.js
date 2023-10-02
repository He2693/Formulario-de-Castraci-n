import React from "react";
import { Link } from "react-router-dom";
import imag4  from "./imagenes/imag4.jpg";

const Recomendaciones = () => {
  return (
    <div>
      <div className="fondo"></div>
      <Link to="/" className="btn btn-primary" style={{ clear: "both",fontWeight: 'bold', fontSize: '19px', marginTop: '40px' }}>
        Volver a la Página Principal
      </Link>
      <img
        src={imag4} // Utiliza la variable con la ruta de tu imagen
        alt="Mascota" style={{ float: 'right', // Alinea la imagen a la derecha
          borderRadius: '20%', opacity: '0.9', width: '350px', height: '140px', margin: '0 20px 0 0', marginBottom: '30px', marginTop: '40px' }} 
      />
      <h1 style={{textAlign: 'center', marginBottom: '40px', marginTop: '40px', fontWeight: 'bold', }}>RECOMENDACIONES</h1>
      <h2 className="recomendaciones-titulo" style={{ fontWeight: 'bold', marginBottom: '40px', marginTop: '40px', textAlign: 'justify' }}>Recomendaciones para el Período Pre-operatorio:</h2>
      <p className="letra">

        <p className="recomendaciones-texto" style={{ marginBottom: '20px', textAlign: 'justify' }}>
          Una cirugía programada, planeada de antemano, es ideal porque permite
          planificar con previsión y ayuda a garantizar las mejores condiciones
          posibles para la operación.
        </p>
        <ul className="recomendaciones-lista" style={{ marginBottom: '20px', textAlign: 'justify' }}>
          <li>Que se encuentre correctamente vacunado y desparasitado.</li>
          <li>En el caso de perros, bañarlo 2-3 días antes de la cirugía.</li>
          <li>Ayuno de alimento sólido en las 12 horas previas a la cirugía.</li>
          <li>Se le debe retirar el agua de bebida 2 horas antes de la cirugía.</li>
        </ul>

        <h2 className="recomendaciones-titulo" style={{ fontWeight: 'bold', marginBottom: '40px', marginTop: '40px', textAlign: 'justify' }}>Recomendaciones para el Período Post-operatorio:</h2>
        <p className="recomendaciones-texto" style={{ marginBottom: '20px' }}>
          Después de la cirugía, tu mascota se irá a casa totalmente despierta y
          andando por su propio pie ya que el postoperatorio inmediato lo pasan en
          nuestra clínica bajo vigilancia veterinaria.
        </p>
        <ul className="recomendaciones-lista" style={{ marginBottom: '25px', textAlign: 'justify' }}>
          <li>
            Le colocaremos a su mascota un collar Isabelino para que no se toque
            los puntos. No le quite el collar en ningún momento y no permita que
            se toque la herida quirúrgica. Tu mascota se tendrá que adaptar a
            llevarlo puesto y a comer con él.
          </li>
          <li>
            Es posible que la herida sangre ligeramente el primer día. Si fuese
            mucha cantidad debes acudir a la consulta para evaluarla, esto no suele
            ser normal.
          </li>
          <li>
            Es necesario que el animal esté cómodo y permanezca en un lugar
            apartado y tranquilo en las horas posteriores a la cirugía.
          </li>
          <li>
            Es conveniente alternar ese descanso con breves períodos de paseo y
            animarle a utilizar su bandeja de arena en el caso de gatos o el lugar
            habitual donde haga sus necesidades. Cuando salgan de paseo, utilice
            siempre la correa. No es conveniente soltarle en el parque, hasta que
            no se hayan retirado los puntos.
          </li>
          <li>
            En caso de llevar un vendaje, intente mantenerlo limpio y seco el
            mayor tiempo posible. Si este se moja puede afectar a la piel, por lo
            que es recomendable que acuda a la clínica para cambiarlo.
          </li>
          <li>
            Las mascotas pueden tener menos apetito durante los primeros días
            posteriores a la operación. Ofrézcale una comida más apetecible en ese
            caso. Además, siempre debe tener a su disposición agua para beber, pero
            sin que beba en exceso debido a la probabilidad de inducirle el vómito.
          </li>
          <li>
            Normalmente, la retirada de los puntos de sutura, o la revisión de la
            herida para el alta en el caso de suturas intradérmicas, tiene lugar
            entre una semana y 10 días después de la operación, aunque puede haber
            variaciones específicas a cada caso.
          </li>
        </ul>
      </p>
      <p className="recomendaciones-texto" style={{ fontWeight: 'bold', fontSize: '20px',marginBottom: '20px' }}>
        Referencia Bibliográfica: VITALCAN (2018) Recomendaciones cirugía castración / esterilización perros o gatos. https://vitalcan.es/indicaciones-castracion-esterilizacion-perros-o-gatos/
      </p>

      {/* Agrega el botón para volver a la página principal */}
      <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '45px' }}>
        Volver a la Página Principal
      </Link>
    </div>
  );
};

export default Recomendaciones;
