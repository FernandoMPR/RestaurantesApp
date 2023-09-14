import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const getAllData = () => {
  return axios.get("http://127.0.0.1:8000/login/api/v1/login/");
};

export const postUser = (username, password) => {
  return axios.post("http://127.0.0.1:8000/login/api/v1/login/", {
    username,
    password,
  });
};
