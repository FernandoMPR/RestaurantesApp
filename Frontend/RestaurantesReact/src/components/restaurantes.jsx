import React, { useState, useEffect } from "react";
import { getRestaurantes, deleteRestaurante} from "../api/dataAPI";
import { Link } from "react-router-dom";

const ListaRestaurantes = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const respuesta = await getRestaurantes();
        setData(respuesta.data);
        // console.log(respuesta.data)
      } catch (error) {
        console.error("No se obtuvieron datos", error);
      }
    }
    fetchData();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await deleteRestaurante(id);
      const updatedData = data.filter((restaurante) => restaurante.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error al eliminar el restaurante", error);
    }
  };

  return (
    <>
      <h2>Lista de Restaurantes</h2>
      <ul>
        {data.map((restaurantes) => (
          <li key={restaurantes.id}>
            <strong>{restaurantes.nombre}</strong> - {restaurantes.tipo}
            <p>Dirección: {restaurantes.dirrecion}</p>
            <p>Teléfono: {restaurantes.telefono}</p>
            <Link to={`/editar-restaurante/${restaurantes.id}`}>
              Editar 
            </Link>
            <button onClick={() => handleDelete(restaurantes.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaRestaurantes;
