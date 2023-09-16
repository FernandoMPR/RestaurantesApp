import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { putRestauranteID } from "../api/dataAPI";

const EditarRestaurante = () => {
  const { id } = useParams(); // OBTENER ID DE LA URL
  const navigate = useNavigate();


  const [restaurante, setRestaurante] = useState({
    nombre: "",
    tipo: "",
    direccion: "",
    telefono: "",
  });

  //OBTENER DATOS DE RESTAURANTE MEDIANTE ID PRESENTES O FUTUROS
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/restaurantes/${id}/`
        );
        setRestaurante(response.data);
      } catch (error) {
        console.error(
          "No se pudieron obtener los detalles del restaurante",
          error
        );
      }
    }
    fetchData();
  }, [id]);

  // ALMACEN DE MAP POR NOMBRE Y VALOR   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurante({
      ...restaurante,
      [name]: value,
    });
  };

  //PETICION DE API PARA ACTUALIZAR RESTURANTE (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await putRestauranteID(id ,restaurante)
      if (response.status === 200){
      console.log("Restaurante actualizado correctamente");
      navigate("/");
      toast.success("Cambios guardados correctamente", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    } catch (error) {
      console.error("Error al actualizar el restaurante", error);
      toast.error("Error al actualizar el restaurante", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  //SOLO NUMEROS PARA INPUT CELULAR 
  function LimitarDigitos(input, limite) {
    const regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
    if (input.value.length > limite) {
      input.value = input.value.substring(0, limite);
    }
  }

  return (
    <>
    <div className="bgc">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
            <h2 className="text-center">Editar Restaurante</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={restaurante.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mt-3">Tipo:</label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="tipo"
                          value="pizza"
                          checked={restaurante.tipo === "pizza"}
                          onChange={handleChange}
                        />
                        Pizza
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="tipo"
                          value="tacos"
                          checked={restaurante.tipo === "tacos"}
                          onChange={handleChange}
                        />
                        Tacos
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="tipo"
                          value="italian"
                          checked={restaurante.tipo === "italian"}
                          onChange={handleChange}
                        />
                        Italian
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="tipo"
                          value="fast-food"
                          checked={restaurante.tipo === "fast-food"}
                          onChange={handleChange}
                        />
                        Fast Food
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="direccion" className="mt-3">Dirección:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      value={restaurante.direccion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono" className="mt-3">Teléfono:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      value={restaurante.telefono}
                      onInput={(e) => LimitarDigitos(e.target, 10)}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block mt-4 w-75 mx-auto">
                    Guardar Cambios
                  </button>
                  </div>
                  <p className="mt-3 text-center">
                    <a href="/">Ir a la página principal</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EditarRestaurante;
