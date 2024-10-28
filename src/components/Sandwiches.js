// src/components/Sandwiches.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sandwiches.css';

const sandwichesData = [
  {
    id: 1,
    nombre: 'Sandwich de Pollo',
    precio: 500,
    descuento: 10,
    imagen: 'ruta/a/la/imagen/sandwich-pollo.jpg',
    descripcion: 'Pan, pechuga de pollo, lechuga, mayonesa.',
  },
  {
    id: 2,
    nombre: 'Sandwich Vegetariano',
    precio: 450,
    descuento: null,
    imagen: 'ruta/a/la/imagen/sandwich-vegetariano.jpg',
    descripcion: 'Pan, aguacate, tomate, lechuga, hummus.',
  },
  {
    id: 3,
    nombre: 'Sandwich de Jamón y Queso',
    precio: 480,
    descuento: 5,
    imagen: 'ruta/a/la/imagen/sandwich-jamon-queso.jpg',
    descripcion: 'Pan, jamón, queso, mostaza.',
  },
];

function Sandwiches() {
  return (
    <div className="sandwiches">
      <h1>Tipos de Sandwiches</h1>
      <div className="lista-sandwiches">
        {sandwichesData.map((sandwich) => (
          <div key={sandwich.id} className="sandwich-card">
            <Link to={`/sandwiches/${sandwich.id}`}>
              <img src={sandwich.imagen} alt={sandwich.nombre} />
              <h2>{sandwich.nombre}</h2>
              <p>Precio: ${sandwich.precio}</p>
              {sandwich.descuento && (
                <p>
                  Descuento: {sandwich.descuento}%
                  <br />
                  Precio con Descuento: ${Math.round(sandwich.precio * (1 - sandwich.descuento / 100))}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sandwiches;

