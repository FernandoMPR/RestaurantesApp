import axios from "axios";

export const getRestaurantes = () => {
  return axios.get("http://localhost:8000/api/restaurantes/");
};

export const postUserRegister = (user, email, password) => {
  return axios.post(
    "http://localhost:8000/api/register/",
    {
      user,
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const postUserLogin = (email, password) => {
  return axios.post("http://localhost:8000/api/login/", {
    email,
    password,
  });
};

export const deleteRestaurante = (id) => {
  return axios.delete(`http://localhost:8000/api/restaurantes/${id}/`);
};
