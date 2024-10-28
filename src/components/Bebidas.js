// src/components/Bebidas.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Bebidas.css';

function Bebidas() {
  const bebidasData = [
    {
      id: 1,
      nombre: 'Coca Cola',
      precio: 150,
      descuento: null,
      imagen: 'ruta/a/la/imagen/coca-cola.jpg',
      descripcion: 'Refresco de cola.',
    },
    {
      id: 2,
      nombre: 'Sprite',
      precio: 150,
      descuento: 5,
      imagen: 'ruta/a/la/imagen/sprite.jpg',
      descripcion: 'Refresco sabor limón-lima.',
    },
    {
      id: 3,
      nombre: 'Agua Mineral',
      precio: 100,
      descuento: null,
      imagen: 'ruta/a/la/imagen/agua-mineral.jpg',
      descripcion: 'Agua mineral con gas.',
    },
  ];

  return (
    <div className="bebidas">
      <h1>Tipos de Bebidas</h1>
      <div className="lista-bebidas">
        {bebidasData.map((bebida) => (
          <div key={bebida.id} className="bebida-card">
            <Link to={`/bebidas/${bebida.id}`}>
              <img src={bebida.imagen} alt={bebida.nombre} />
              <h2>{bebida.nombre}</h2>
              <p>Precio: ${bebida.precio}</p>
              {bebida.descuento && (
                <p>
                  Descuento: {bebida.descuento}%
                  <br />
                  Precio con Descuento: ${Math.round(bebida.precio * (1 - bebida.descuento / 100))}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bebidas;
