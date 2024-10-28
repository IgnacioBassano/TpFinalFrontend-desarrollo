// src/components/DetalleHamburguesa.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalleHamburguesa() {
  const { id } = useParams();
  const hamburguesasData = [
    {
      id: 1,
      nombre: 'Hamburguesa Clásica',
      precio: 500,
      descuento: 10,
      imagen: 'ruta/a/la/imagen/hamburguesa-clasica.jpg',
      descripcion: 'Carne de res, lechuga, tomate, cebolla y mayonesa.',
    },
    {
      id: 2,
      nombre: 'Hamburguesa Doble Queso',
      precio: 700,
      descuento: 15,
      imagen: 'ruta/a/la/imagen/hamburguesa-doble-queso.jpg',
      descripcion: 'Carne de res, doble queso, lechuga y ketchup.',
    },
    {
      id: 3,
      nombre: 'Hamburguesa BBQ',
      precio: 650,
      descuento: 5,
      imagen: 'ruta/a/la/imagen/hamburguesa-bbq.jpg',
      descripcion: 'Carne de res, salsa BBQ, cebolla y queso cheddar.',
    },
    {
      id: 4,
      nombre: 'Hamburguesa Picante',
      precio: 600,
      descuento: 20,
      imagen: 'ruta/a/la/imagen/hamburguesa-picante.jpg',
      descripcion: 'Carne de res, jalapeños, salsa picante y cebolla.',
    },
    {
      id: 5,
      nombre: 'Hamburguesa Vegetariana',
      precio: 550,
      descuento: null,
      imagen: 'ruta/a/la/imagen/hamburguesa-vegetariana.jpg',
      descripcion: 'Hamburguesa de garbanzos, lechuga, tomate y aguacate.',
    },
  ];

  const hamburguesa = hamburguesasData.find(h => h.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    // Aquí puedes implementar la lógica para agregar al carrito
    alert(`Agregaste ${cantidad} ${hamburguesa.nombre} al carrito.`);
  };

  if (!hamburguesa) return <p>Hamburguesa no encontrada.</p>;

  const precioFinal = hamburguesa.descuento 
    ? Math.round(hamburguesa.precio * (1 - hamburguesa.descuento / 100)) 
    : hamburguesa.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-hamburguesa">
      <h1>{hamburguesa.nombre}</h1>
      <img src={hamburguesa.imagen} alt={hamburguesa.nombre} className="imagen-ampliada" />
      <p>Descripción: {hamburguesa.descripcion}</p>
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
      <p>Precio por Hamburguesa: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/hamburguesas">Volver a Hamburguesas</Link>
    </div>
  );
}

export default DetalleHamburguesa;
