// src/components/Tablas.js
import React from 'react';
import { Link } from 'react-router-dom';
import './tablas.css'; // Debe ser Tablas.css

function Tablas() {
  const tablasData = [
    {
      id: 1,
      nombre: 'Tabla de Carnes',
      precio: 120,
      imagen: 'ruta/a/la/imagen/tabla-carnes.jpg',
      descripcion: 'Una deliciosa selección de las mejores carnes.',
    },
    {
      id: 2,
      nombre: 'Tabla de Quesos',
      precio: 100,
      imagen: 'ruta/a/la/imagen/tabla-quesos.jpg',
      descripcion: 'Una exquisita selección de quesos variados.',
    },
    {
      id: 3,
      nombre: 'Tabla Mixta',
      precio: 150,
      imagen: 'ruta/a/la/imagen/tabla-mixta.jpg',
      descripcion: 'Una combinación de carnes y quesos.',
    },
  ];

  return (
    <div className="tablas">
      <h1>Tipos de Tablas</h1>
      <div className="lista-tablas">
        {tablasData.map((tabla) => (
          <div key={tabla.id} className="tabla-card">
            <Link to={`/tablas/${tabla.id}`}>
              <img src={tabla.imagen} alt={tabla.nombre} />
              <h2>{tabla.nombre}</h2>
              <p>Precio: ${tabla.precio}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tablas;
