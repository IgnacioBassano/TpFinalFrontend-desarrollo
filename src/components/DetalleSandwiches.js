import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detalleSandwiches.css';

const sandwichesData = [
  {
    id: 1,
    nombre: 'Sandwich de Pollo',
    precio: 500,
    descuento: 10,
    imagen: 'https://imag.bonviveur.com/sandwich-de-pollo.jpg',
    descripcion: 'Pan, pechuga de pollo, lechuga, mayonesa.',
  },
  {
    id: 2,
    nombre: 'Sandwich Vegetariano',
    precio: 450,
    descuento: null,
    imagen: 'https://file-cdn.mercyforanimals.org/mercy4animals.wpengine.com/sites/446/2019/06/sandwisches-veganos.jpg',
    descripcion: 'Pan, aguacate, tomate, lechuga, hummus.',
  },
  {
    id: 3,
    nombre: 'Sandwich de Jamón y Queso',
    precio: 480,
    descuento: 5,
    imagen: 'https://www.bimbo.es/uploads/11-sandwich-con-queso-lechuga-tomate-mayonesa-y-pechuga-de-pavo-a-las-finas-hierbas.webp',
    descripcion: 'Pan, jamón, queso, mostaza.',
  },
];

function DetalleSandwiches() {
  const { id } = useParams();
  const sandwich = sandwichesData.find(s => s.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    alert(`Agregaste ${cantidad} ${sandwich.nombre} al carrito.`);
  };

  if (!sandwich) return <p>Sandwich no encontrado.</p>;

  const precioFinal = sandwich.descuento 
    ? Math.round(sandwich.precio * (1 - sandwich.descuento / 100)) 
    : sandwich.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-sandwich">
      <h1>{sandwich.nombre}</h1>
      <img src={sandwich.imagen} alt={sandwich.nombre} className="imagen-ampliada" />
      <p>Descripción: {sandwich.descripcion}</p>
      <div className="formulario">
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
      <div className="formulario">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          min="1"
        />
      </div>
      <p>Precio por Sandwich: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart} className="btn-agregar">Agregar al Carrito</button>
      <Link to="/sandwiches" className="link-volver">Volver a Sandwiches</Link>
    </div>
  );
}

export default DetalleSandwiches;