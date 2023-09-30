import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Home.css"

function CrearRestaurante() {
  const navigate = useNavigate();
  const [restaurante, setRestaurante] = useState({
    nombre: "",
    tipo: "",
    direccion: "",
    telefono: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurante({
      ...restaurante,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidacion = {};
    
    // VALIDAR CAMPOS REQUERIDOS 
    if (!restaurante.nombre) {
      erroresValidacion.nombre = "Campo requerido";
    }
    if (!restaurante.tipo) {
      erroresValidacion.tipo = "Campo requerido";
    }
    if (!restaurante.direccion) {
      erroresValidacion.direccion = "Campo requerido";
    }
    if (!restaurante.telefono) {
      erroresValidacion.telefono = "Campo requerido";
    }

    setErrores(erroresValidacion);

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    try {
      //PETICION A BASE DE DATOS PARA CREAR RESTAURANTE 
      const response = await axios.post(
        "http://localhost:8000/api/restaurantes/",
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
      toast.success("Restaurante Creado con Exito", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error al crear Restaurante", error);
      toast.error("Error al crear Restaurante", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  
  //SOLO NUMEROS EN CELULAR 
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
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center">Nuevo Restaurante</h2>
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
                      placeholder="Ingrese el nombre del restaurante"
                      required
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
                          required
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
                          required
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
                          required
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
                          required
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
                      placeholder="Ingrese la dirección del restaurante"
                      required
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
                      placeholder="Ingrese el número de teléfono del restaurante"
                      required
                    />
                  </div>
                  <div className="text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-block w-75">
                    Agregar Restaurante
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
    </>
  );
}

export default CrearRestaurante;
