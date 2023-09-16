import React, { useState, useEffect } from "react";
import { getRestaurantes, deleteRestaurante } from "../api/dataAPI";
import ConfirmationDialog from "./ConfirmarBorrar";
import "../styles/Home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListaRestaurantes = ({ isLoggedIn, canActivate }) => {
  const [data, setData] = useState([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 6;

  //PAGINACION
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = data.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  //ACTUALIZACION DE GET DE RESTAURANTES CONTINUO
  useEffect(() => {
    async function fetchData() {
      try {
        const respuesta = await getRestaurantes();
        setData(respuesta.data);
        console.log(respuesta.data);
      } catch (error) {
        console.error("No se obtuvieron datos", error);
      }
    }
    fetchData();
  }, []);

  //BORRAR RESTAURANTE
  const handleDelete = async (id) => {
    setShowConfirmationDialog(true);
    setRestaurantToDelete(id);
  };

  //CONFIRMAR BORRAR RESTAURANTE
  const confirmDelete = async () => {
    try {
      await deleteRestaurante(restaurantToDelete);
      const updatedData = data.filter(
        (restaurante) => restaurante.id !== restaurantToDelete
      );
      setData(updatedData);
      setShowConfirmationDialog(false);
      toast.success("Se ha eliminado el restaurante", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error al eliminar el restaurante", error);
    }
  };

  //CANCELAR BORRAR RESTAURANTE
  const cancelDelete = () => {
    setShowConfirmationDialog(false);
    setRestaurantToDelete(null);
  };

  //NUMERO DE PAGINAS 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="pb-4">Lista de Restaurantes</h2>
        <div className="row">
          {currentRestaurants.map((restaurante) => (
            <div key={restaurante.id} className="col-md-4 mb-4">
              <div className="card shadow p-2 animacion">
                <div className="card-body ">
                  <h5 className="card-title pb-2 text-uppercase">
                    {restaurante.nombre}
                  </h5>
                  <p className="card-text">
                    <i className="bi bi-cart-fill  " />
                    Tipo:{" "}
                    <span className="text-uppercase">{restaurante.tipo}</span>
                  </p>
                  <p className="card-text">
                    <i className="bi bi-house-fill " />
                    Dirección: {restaurante.direccion}
                  </p>
                  <p className="card-text">
                    <i className="bi bi-telephone-fill" />
                    Teléfono: {restaurante.telefono}
                  </p>
                  {canActivate() && (
                    <div className="text-center">
                      <ul>
                        <a
                          href={`/editar-restaurante/${restaurante.id}`}
                          className="btn btn-primary mr-2 btns"
                        >
                          Editar
                        </a>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(restaurante.id)}
                        >
                          Borrar
                        </button>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination justify-content-center">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
      </div>
      {showConfirmationDialog && (
        <ConfirmationDialog
          message="¿Estás seguro de que deseas eliminar este restaurante?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};

export default ListaRestaurantes;
