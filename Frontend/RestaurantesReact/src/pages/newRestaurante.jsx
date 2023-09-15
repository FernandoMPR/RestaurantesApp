import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CrearRestaurante() {
  const navigate = useNavigate();
  const [restaurante, setRestaurante] = useState({
    nombre: "",
    tipo: "",
    direccion: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurante({
      ...restaurante,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/restaurantes/",
        restaurante
      );
      setRestaurante({
        nombre: "",
        tipo: "",
        direccion: "",
        telefono: "",
      });
      console.log("restaurante creado", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error al crear Restaurante", error);
    }
  }; 

  return (
    <>
      <div>
        <h1>Crear Nuevo Restaurante</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={restaurante.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Tipo:</label>
            <input
              type="text"
              name="tipo"
              value={restaurante.tipo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={restaurante.direccion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={restaurante.telefono}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Agregar Restaurante</button>
        </form>
      </div>
      <Link to="/">Ir a la página principal</Link>
    </>
  );
}

export default CrearRestaurante;
