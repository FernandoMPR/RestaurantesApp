import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../api/dataAPI";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postUserLogin(email, password);
      if (response.status === 200) {
        console.log("Login exitoso");
        localStorage.setItem("user", JSON.stringify(user));


        navigate("/");
      } else {
        console.error("Error Login");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  };

  return (
    <div className="bgc">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card pt-2 pb-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Coloque su correo electronico"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    /> 
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Coloque su contraseña"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Check"
                    />
                    <label className="form-check-label" htmlFor="Check">
                      Recuerdame
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary text-center w-75 mx-auto mt-4"
                    >
                      Iniciar Sesión
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

export default Login;
