import React from "react";
import ListaRestaurantes from "./restaurantes";
import "../styles/Home.css";


function Navigatebar ({ isLoggedIn, handleLogin, canActivate, handleLogout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nava">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            
          </a>
          <form className="d-flex" role="search">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="nav ms-auto flex-column flex-md-row bd-navbar-nav nav-indicator">
                {canActivate() ? (
                  <>
                    <li className="nav-item">
                      <a href="/nuevo-restaurante" className="btn btn-outline-primary mr-2">
                        Nuevo Restaurante
                      </a>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-danger" onClick={handleLogout}>
                        Cerrar Sesión
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a href="/signin" className="nav-item">
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          onClick={handleLogin}
                        >
                          <i className="bi bi-person-circle" />
                          Iniciar Sesión
                        </button>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/signup" className="btn btn-primary">
                        Registrarse
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </form>
        </div>
      </nav>
      <div>
        <ListaRestaurantes isLoggedIn={isLoggedIn} canActivate={canActivate}/>
      </div>
    </>
  );
}

export default Navigatebar;
