import axios from "axios";

export const getRestaurantes = () => {
  return axios.get (
    "http://localhost:8000/restaurantes/"
  );
};

export const deleteRestaurante = (id) => {
  return axios.delete(
    `http://localhost:8000/restaurantes/${id}/`
  )
}