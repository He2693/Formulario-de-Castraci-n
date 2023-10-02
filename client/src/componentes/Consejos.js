import React from "react";
import { Link } from "react-router-dom";
import imag3 from "./imagenes/imag3.jpg";
import imag1 from "./imagenes/imag1.jpg";

const Consejos = () => {
    return (
        <div className="informacion-container">
            <div className="fondo"></div>
            <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', marginTop: '60px' }}>
                Volver a la Página Principal
            </Link>
            <img
                src={imag3} // Utiliza la variable con la ruta de tu imagen
                alt="Mascota" style={{
                    float: 'right', // Alinea la imagen a la derecha
                    borderRadius: '10%',  width: '290px', height: '220px', margin: '0 20px 0 0', marginBottom: '30px', marginTop: '40px'
                }}
            />
            <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '60px', fontWeight: 'bold' }}>CONSEJOS PARA EL CUIDADO Y BIENESTAR DE TU MASCOTA</h1>

            <p className="letra" style={{ textAlign: 'justify', fontWeight: 'bold' }}>1. Antes que nada, visita al veterinario:</p>

            <p className="letra" style={{ textAlign: 'justify' }}>
                Tener una mascota de manera responsable comienza con visitas regulares al veterinario.
                Dada su esperanza de vida, tu perrito o mínimo deberían hacerse un chequeo una o dos veces al año.
                Pero el establecer y mantener la buena salud de tu mascota significa mantenerse al día con las visitas al veterinario a medida que envejecen.
            </p>

            <p className="letra" style={{ textAlign: 'justify', fontWeight: 'bold' }}>2. Proporciona un entorno de vida seguro, cómodo y enriquecedor:</p>

            <p className="letra" style={{ textAlign: 'justify' }}>
                Así como los seres humanos necesitamos un hogar en el que podamos sentirnos cómodos y seguros, también lo necesitan nuestras mascotas.
            </p>
            <p className="letra" style={{ textAlign: 'justify' }}>Consejo clave: las mascotas que son demasiado jóvenes o ya tienen varios años encima pierden su capacidad para regular la temperatura corporal eficientemente.
                Es importante ofrecerles una manta y una cama que les proporcione confort y calor.
                Sobre todo en las horas de la noche.
            </p>

            <p className="letra" style={{ textAlign: 'justify', fontWeight: 'bold' }}>3. Atiende sus necesidades nutricionales:</p>

            <p className="letra" style={{ textAlign: 'justify' }}>
                Todos los organismos vivos necesitan alimento para sobrevivir.
                Lamentablemente, muchas mascotas sufren de obesidad y otros problemas metabólicos por mala alimentación.
                Lo que más adelante se puede derivar en otros problemas de salud.
            </p>
            <p className="letra" style={{ textAlign: 'justify' }}>Consejo clave: selecciona una fórmula de alimento para mascotas que sea apropiada para su edad,
                sus condiciones de salud y el nivel de actividad de tu mascota.
            </p>
            <p className="letra" style={{ textAlign: 'justify', fontWeight: 'bold' }}>4. Esteriliza a tu mascota:</p>

            <p className="letra" style={{ textAlign: 'justify' }}>
                Esterilizar a tu mascota evita una serie de problemas de salud (ASPCA, s.f.), incluídos embarazos complicados y ayuda a la reducción de animales sin hogar. Debido a que la esterilización o castración es una cirugía que requiere anestesia general, es probable que tu mascota pase la noche en el consultorio del veterinario.
                Esto, durante al menos una noche para observación y recuperación.
            </p>
            <p className="letra" style={{ textAlign: 'justify' }}>Consejo clave: trata de practicar este procedimiento en una edad temprana para tu peludito.
                De esta manera su recuperación y su proceso de cicatrización será rápida.
            </p>

            <p className="letra" style={{ textAlign: 'justify', fontWeight: 'bold' }}>5. Aplica las vacunas a tiempo:</p>

            <p className="letra" style={{ textAlign: 'justify' }}>
                EPoco después de llegar a tu hogar, la primera salida debe ser al veterinario. Acto seguido se establecerá un calendario de vacunación para tu pequeño cachorro o gatito. Esto, con el objetivo de protegerlos de enfermedades como la rabia o el moquillo en el caso de los perros. Los gatos también
                se benefician de las vacunas que previenen el virus del herpes felino, la leucemia felina y la rabia.
            </p>
            <p className="letra" style={{ textAlign: 'justify' }}>Consejo clave: si adoptaste una mascota en edad avanzada, asegúrate de que también esté protegido.
                Las vacunas necesitan renovación y no son solo para mascotas jóvenes.
            </p>

            <p className="letra" style={{ textAlign: 'justify', fontSize: '20px', fontWeight: 'bold' }}>Referencia Bibliográfica:  Martins Jerónimo(2022) 10 CONSEJOS PARA EL CUIDADO Y BIENESTAR DE TU MASCOTA.
                Link: https://aratiendas.com/blog/hogar/10-consejos-para-el-cuidado-y-bienestar-de-tu-mascota/
            </p>
            <img
                src={imag1} // Utiliza la variable con la ruta de tu imagen
                alt="Mascota" style={{
                    display: 'block', // Cambia la propiedad float a display
                    borderRadius: '30%',
                    opacity: '0.9',
                    position: 'relative',
                    margin: 'auto', width: '650px', height: '250px', // Centra horizontalmente la imagen
                  }}
            />

            <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
                Volver a la Página Principal
            </Link>
        </div>
    );
};

export default Consejos;

