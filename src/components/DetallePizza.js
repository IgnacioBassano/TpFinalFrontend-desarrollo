// src/components/DetallePizzas.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detallePizzas.css';

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

function DetallePizzas() {
  const { id } = useParams();
  const pizza = pizzasData.find(p => p.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    alert(`Agregaste ${cantidad} ${pizza.nombre} al carrito.`);
  };

  if (!pizza) return <p>Pizza no encontrada.</p>;

  // Calcular precio final considerando el descuento
  const precioFinal = pizza.descuento 
    ? Math.round(pizza.precio * (1 - pizza.descuento / 100)) 
    : pizza.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-pizza">
      <h1>{pizza.nombre}</h1>
      <img src={pizza.imagen} alt={pizza.nombre} className="imagen-ampliada" />
      <p>Descripción: {pizza.descripcion}</p>
      <div>
        <label htmlFor="observaciones">Observaciones:</label>
        <textarea
          id="observaciones"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          rows="4"
          minLength="150"
          placeholder="Escribe tus observaciones aquí..."
        />
      </div>
      <div>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          min="1"
        />
      </div>
      <p>Precio por Pizza: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/pizzas">Volver a Pizzas</Link>
    </div>
  );
}

export default DetallePizzas;
