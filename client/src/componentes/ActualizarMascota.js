import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DiayHora from "./DiayHora";
import { Link } from "react-router-dom";
import { UserId } from "./globals";

const ActualizarMascota = () => {
    const { id } = useParams();

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [especie, setEspecie] = useState("");
    const [peso, setPeso] = useState("");
    const [edad, setEdad] = useState("");
    const [errores, setErrores] = useState({});
    const [fechaCastracion, setFechaCastracion] = useState(null);
    const [idUsuario, setIdUsuario] = useState(UserId);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/mascota/" + id)
            .then((res) => {
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setEspecie(res.data.especie);
                setPeso(res.data.peso);
                setEdad(res.data.edad);
                setFechaCastracion(new Date(res.data.fechaCastracion));
                setIdUsuario(res.data.idUsuario);
            })
            .catch((err) => setErrores(err.response.data.errors));
    }, [id]);

    const actualizarMascota = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/mascota/" + id, {
                nombre,
                imagen,
                especie,
                peso,
                edad,
                fechaCastracion,
            })
            .then((res) => navigate("/"))
            .catch((err) => setErrores(err.response.data.errors));
    };

    return (
        <div>
            <div className="fondo"></div>
            <Link to="/" className="btn btn-primary" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', marginTop: '30px' }}>
                Volver a la Página Principal
            </Link>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px', fontWeight: 'bold' }}>Actualizar los Datos de su Mascota</h1>
            <form onSubmit={actualizarMascota}>
                <div>
                    <p className="letra style">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={nombre} className="form-control" onChange={(e) => setNombre(e.target.value)} />
                        {errores.nombre ? <p>{errores.nombre.message}</p> : null}
                    </p>
                </div>

                <div>
                    <p className="letra style">
                        <label>Imagen:</label>
                        <input
                            type="file" // Cambia el tipo a "file"
                            name="imagen"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    const imageUrl = e.target.result;
                                    setImagen(imageUrl);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                        {imagen && <img className="img-fluid" alt="mascota" src={imagen} />}
                        {errores.imagen ? <p>{errores.imagen.message}</p> : null}
                    </p>
                </div>


                <div>
                    <p className="letra style">
                        <label>Especie:</label> <input type="text" name="especie" value={especie}
                            className="form-control" onChange={(e) => setEspecie(e.target.value)} /> {errores.especie ? <p>{errores.especie.message}</p> : null}
                    </p>
                </div>

                <div>
                    <p className="letra style">
                        <label>Peso:</label> <input type="text" name="peso" value={peso} className="form-control" onChange={(e) => setPeso(e.target.value)} />
                        {errores.peso ? <p>{errores.peso.message}</p> : null}
                    </p>
                </div>

                <div>
                    <p className="letra style">
                        <label>Edad:</label> <input type="text" name="edad" value={edad} className="form-control" onChange={(e) => setEdad(e.target.value)} />
                        {errores.edad ? <p>{errores.edad.message}</p> : null}
                    </p>
                </div>

                <div>
                    <p className="letra style">
                        <label>Fecha de Castración:</label> <DiayHora selected={fechaCastracion} onChange={(date) => setFechaCastracion(date)} />
                        {errores.fechaCastracion ? (<p>{errores.fechaCastracion.message}</p>) : null}
                    </p>
                </div>

                <input type="submit" className="btn btn-success mt-3" style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '20px' }} value="Guardar" />
            </form>
        </div>
    );
};

export default ActualizarMascota;
