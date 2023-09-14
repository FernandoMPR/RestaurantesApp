import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login/",
        formData
      );
      console.log(response.data);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
       <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to="/">Ir a la página principal</Link>
    </div>
  );
}

export default Login;
