import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    user: '',  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
      const response = await axios.post('http://localhost:8000/register/', formData, config);
      console.log(response.data);


    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Usuario"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button type="submit">Registrarse</button>
      </form>
      <Link to="/">Ir a la página principal</Link>
    </div>
  );
}

export default Registration;