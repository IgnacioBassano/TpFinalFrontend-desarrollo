// src/components/Pizzas.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pizzas.css';

const pizzasData = [
  {
    id: 1,
    nombre: 'Pizza Margherita',
    precio: 800,
    descuento: 10,
    imagen: 'ruta/a/la/imagen/pizza-margherita.jpg',
    descripcion: 'Salsa de tomate, mozzarella, albahaca.',
  },
  {
    id: 2,
    nombre: 'Pizza Pepperoni',
    precio: 900,
    descuento: 15,
    imagen: 'ruta/a/la/imagen/pizza-pepperoni.jpg',
    descripcion: 'Salsa de tomate, mozzarella, pepperoni.',
  },
  {
    id: 3,
    nombre: 'Pizza Cuatro Quesos',
    precio: 950,
    descuento: 5,
    imagen: 'ruta/a/la/imagen/pizza-cuatro-quesos.jpg',
    descripcion: 'Mozzarella, gorgonzola, parmesano y queso de cabra.',
  },
  {
    id: 4,
    nombre: 'Pizza Vegetariana',
    precio: 850,
    descuento: 20,
    imagen: 'ruta/a/la/imagen/pizza-vegetariana.jpg',
    descripcion: 'Salsa de tomate, mozzarella, pimientos, cebolla, aceitunas.',
  },
  {
    id: 5,
    nombre: 'Pizza BBQ Pollo',
    precio: 950,
    descuento: null,
    imagen: 'ruta/a/la/imagen/pizza-bbq-pollo.jpg',
    descripcion: 'Pollo, salsa BBQ, mozzarella, cebolla morada.',
  },
];

function Pizzas() {
  return (
    <div className="pizzas">
      <h1>Tipos de Pizzas</h1>
      <div className="lista-pizzas">
        {pizzasData.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <Link to={`/pizzas/${pizza.id}`}>
              <img src={pizza.imagen} alt={pizza.nombre} />
              <h2>{pizza.nombre}</h2>
              <p>Precio: ${pizza.precio}</p>
              {pizza.descuento && (
                <p>
                  Descuento: {pizza.descuento}%
                  <br />
                  Precio con Descuento: ${Math.round(pizza.precio * (1 - pizza.descuento / 100))}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizzas;
