import React, { useState } from "react";
import { postUserRegister } from "../api/dataAPI";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //PETICION A BASE DE DATOS PARA CREAR USUARIO
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postUserRegister(user, email, password);
      if (response.status === 200) {
        console.log("Registro exitoso");
        navigate("/");
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <div className="bgc">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center">Registro</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="user" className="mb-1">
                      Usuario
                    </label>
                    <input
                      className="form-control mb-4"
                      placeholder="Ingrese un Usuario"
                      required
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control mb-4"
                      placeholder="Ingrese un correo electronico"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control mb-5"
                      placeholder="Ingrese una contraseña"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block text-center w-75 mx-auto mt-4">
                    Registrarse
                  </button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  <a href="/">Ir a la página principal</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
