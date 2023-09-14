import React, { Component } from 'react';

class ListaRestaurantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantes: [
        {
          id: 1,
          nombre: 'Restaurante Uno',
          tipo: 'Comida italiana',
          direccion: '123 Calle Principal',
          telefono: '555-123-4567',
        },
        {
          id: 2,
          nombre: 'Restaurante Dos',
          tipo: 'Comida mexicana',
          direccion: '456 Avenida Secundaria',
          telefono: '555-987-6543',
        },
        {
          id: 3,
          nombre: 'Restaurante Tres',
          tipo: 'Comida asiática',
          direccion: '789 Calle Tranquila',
          telefono: '555-789-1234',
        },
        {
            id: 3,
            nombre: 'Restaurante Tres',
            tipo: 'Comida asiática',
            direccion: '789 Calle Tranquila',
            telefono: '555-789-1234',
          },
          {
            id: 3,
            nombre: 'Restaurante Tres',
            tipo: 'Comida asiática',
            direccion: '789 Calle Tranquila',
            telefono: '555-789-1234',
          },
          {
            id: 3,
            nombre: 'Restaurante Tres',
            tipo: 'Comida asiática',
            direccion: '789 Calle Tranquila',
            telefono: '555-789-1234',
          },
        // Agrega más restaurantes según sea necesario
      ],
    };
  }

  render() {
    return (
      <>
        <h2>Lista de Restaurantes</h2>
        <ul>
          {this.state.restaurantes.map((restaurante) => (
            <li key={restaurante.id}>
              <strong>{restaurante.nombre}</strong> - {restaurante.tipo}
              <p>Dirección: {restaurante.direccion}</p>
              <p>Teléfono: {restaurante.telefono}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListaRestaurantes;
