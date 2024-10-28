// src/components/DetalleTablas.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detalleTablas.css'; 

const tablasData = [
  {
    id: 1,
    nombre: 'Tabla de Carnes',
    precio: 120,
    descuento: 10, 
    descripcion: 'Una deliciosa selección de las mejores carnes.',
    imagen: 'ruta/a/la/imagen/tabla-carnes.jpg',
  },
  {
    id: 2,
    nombre: 'Tabla de Quesos',
    precio: 100,
    descuento: null, 
    descripcion: 'Una exquisita selección de quesos variados.',
    imagen: 'ruta/a/la/imagen/tabla-quesos.jpg',
  },
  {
    id: 3,
    nombre: 'Tabla Mixta',
    precio: 150,
    descuento: 5, 
    descripcion: 'Una combinación de carnes y quesos.',
    imagen: 'ruta/a/la/imagen/tabla-mixta.jpg',
  },
];

function DetalleTablas() {
  const { id } = useParams();
  const tabla = tablasData.find(t => t.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    alert(`Agregaste ${cantidad} ${tabla.nombre} al carrito.`);
  };

  if (!tabla) return <p>Tabla no encontrada.</p>;

  const precioFinal = tabla.descuento 
    ? Math.round(tabla.precio * (1 - tabla.descuento / 100)) 
    : tabla.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-tabla">
      <h1>{tabla.nombre}</h1>
      <img src={tabla.imagen} alt={tabla.nombre} className="imagen-ampliada" />
      <p>Descripción: {tabla.descripcion}</p>
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
      <p>Precio por Tabla: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/tablas">Volver a Tablas</Link>
    </div>
  );
}

export default DetalleTablas;
