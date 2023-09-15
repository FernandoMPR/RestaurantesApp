import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListaRestaurantes from "./restaurantes";

function Navigatebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const user = localStorage.getItem("user");
      setUserName(user);
    }
  }, []);

  const handleLogin = async () => {
    const correoAlmacenado = localStorage.getItem("email");
    const contraseñaAlmacenado = localStorage.getItem("password");
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        email: correoAlmacenado,
        password: contraseñaAlmacenado,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      const user = localStorage.getItem("user");
      setUserName(user);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(userName);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    setUserName("");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        {isLoggedIn && <p className="mb-0 mr-3">Bienvenido, {userName}</p>}
        <form className="d-flex" role="search">
          {isLoggedIn ? (
            <>
              <Link to="/nuevo-restaurante">
                <button className="btn btn-outline-primary mr-2">
                  Agregar Nuevo Restaurante
                </button>
              </Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-outline-success" type="button">
                  Registrarse
                </button>
              </Link>
            </>
          )}
        </form>
      </div>
    </nav>
    <div>
      <ListaRestaurantes isLoggedIn={isLoggedIn}/>
    </div>
    </>
  );
}

export default Navigatebar;
