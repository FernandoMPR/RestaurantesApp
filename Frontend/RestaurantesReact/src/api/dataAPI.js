import axios from "axios";


// OBTENER DATOS  RESTAURANTES
export const getRestaurantes = () => {
  return axios.get("http://localhost:8000/api/restaurantes/");
};



// REGISTRAR USUARIO
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

// LOGIN USUARIO
export const postUserLogin = (email, password) => {
  return axios.post("http://localhost:8000/api/login/", {
    email,
    password,
  });
};


//BORRAR RESTAURANTE POR ID
export const deleteRestaurante = (id) => {
  return axios.delete(`http://localhost:8000/api/restaurantes/${id}/`);
};

//OBTENER DATOS DE RESTAURANTE POR ID
export const getRestaurantesID = (id) => {
  return axios.get(`http://localhost:8000/api/restaurantes/${id}/`)
}

//ACTUALIZAR RESTAURANTE POR ID
export const putRestauranteID = (id, restaurante) => {
  return axios.put(`http://localhost:8000/api/restaurantes/${id}/`, restaurante)
}

//NUEVO RESTAURANTE 
export const postCrearRestaurante = (restaurante) => {
  return axios.post(`http://localhost:8000/api/restaurantes/`, restaurante)
}
