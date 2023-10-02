import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserId } from "./globals";


const LoginRegistro = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const registro = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
            .then(res => navigate('/'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setError(err.response.data.message);
                }
            });
    }

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        })
            .then(res => {
                if (res.data.error) {
                    setError(res.data.message);
                } else {
                    // Accede al ID del usuario desde la respuesta
                    const userId = res.data.userId;
                    const userName = res.data.firstName;
                    UserId = userId; 
                   // UserName = userName;
                    navigate('/');
                }
            })
            .catch(err => {
                if (err.response && err.response.data) {
                    setError(err.response.data.message);
                }
            });
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="fondo"></div>
                <h2 style={{ textAlign: 'center', marginBottom: '25px', marginTop: '80px', fontWeight: 'bold' }}>REGISTRO</h2>
                <form onSubmit={registro}>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="firstName">Nombre: </label>
                            <input type="text" name="firstName" id="firstName" className="form-control"
                                value={firstName} onChange={e => setFirstName(e.target.value)} autoComplete="given-name"/>
                            {error && error.firstName && <span className="text-danger">{error.firstName.message}</span>}
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="lastName">Apellido:</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)}autoComplete="family-name" />
                            {error && error.lastName && <span className="text-danger">{error.lastName.message}</span>}
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}autoComplete="email" />
                            {error && error.email && <span className="text-danger">{error.email.message}</span>}
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                            {error && error.password && <span className="text-danger">{error.password.message}</span>}
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="confirmPassword">Confirmación:</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            {error && error.confirmPassword && <span className="text-danger">{error.confirmPassword.message}</span>}
                        </p>
                    </div>
                    <input type="submit" value="Registrarme" className="btn btn-primary" style={{ backgroundColor:"teal",fontWeight: 'bold', fontSize: '25px', marginBottom: '20px' }} />
                </form>
            </div>
            <div className="col-6">
                <h2 style={{ textAlign: 'center', marginBottom: '25px', marginTop: '80px', fontWeight: 'bold' }}>INICIAR SESIÓN</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="emailLogin">E-mail:</label>
                            <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
                        </p>
                    </div>
                    <div className="form-group">
                        <p className="letra">
                            <label htmlFor="passwordLogin">Password: </label>
                            <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                        </p>
                    </div>
                    <div>
                        {error && error.message && <span className="text-danger">{error.message}</span>}
                    </div>
                    <input type="submit" value="Iniciar Sesión" className="btn btn-info" style={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '20px' }} />
                </form>
            </div>
        </div>
    )
}

export default LoginRegistro;
