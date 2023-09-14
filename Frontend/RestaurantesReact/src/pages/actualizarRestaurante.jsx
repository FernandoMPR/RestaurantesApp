import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const EditarRestaurante = () => {
  const { id } = useParams(); // Obtener la ID del restaurante desde la URL
  const navigate = useNavigate();

  const [restaurante, setRestaurante] = useState({
    nombre: "",
    tipo: "",
    direccion: "",
    telefono: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        // Realizar una solicitud GET para obtener los detalles del restaurante por su ID
        const response = await axios.get(`http://localhost:8000/restaurantes/${id}/`);
        setRestaurante(response.data);
      } catch (error) {
        console.error("No se pudieron obtener los detalles del restaurante", error);
      }
    }
    fetchData();
  }, [id]); 

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
      await axios.put(`http://localhost:8000/restaurantes/${id}/`, restaurante);
      console.log("Restaurante actualizado correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar el restaurante", error);
    }
  };

  return (
    <>
      <h2>Editar Restaurante</h2>
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </>
  );
};

export default EditarRestaurante;