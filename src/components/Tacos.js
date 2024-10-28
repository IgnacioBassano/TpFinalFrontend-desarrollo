// src/components/Tacos.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Tacos.css';

function Tacos() {
  const tacosData = [
    {
      id: 1,
      nombre: 'Taco de Ternera',
      precio: 400,
      descuento: 10,
      imagen: 'ruta/a/la/imagen/taco-ternera.jpg',
      descripcion: 'Taco de carne de ternera con cebolla y cilantro.',
    },
    {
      id: 2,
      nombre: 'Taco de Pollo',
      precio: 350,
      descuento: 15,
      imagen: 'ruta/a/la/imagen/taco-pollo.jpg',
      descripcion: 'Taco de pollo asado con salsa y vegetales.',
    },
  ];

  return (
    <div className="tacos">
      <h1>Tipos de Tacos</h1>
      <div className="lista-tacos">
        {tacosData.map((taco) => (
          <div key={taco.id} className="taco-card">
            <Link to={`/tacos/${taco.id}`}>
              <img src={taco.imagen} alt={taco.nombre} />
              <h2>{taco.nombre}</h2>
              <p>Precio: ${taco.precio}</p>
              {taco.descuento && (
                <p>
                  Descuento: {taco.descuento}%
                  <br />
                  Precio con Descuento: ${Math.round(taco.precio * (1 - taco.descuento / 100))}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tacos;

