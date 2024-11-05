import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detalleTacos.css';

const tacosData = [
  {
    id: 1,
    nombre: 'Taco de Ternera',
    precio: 400,
    descuento: 10, 
    imagen: 'https://img.freepik.com/fotos-premium/taco-ternera-recien-asado-sobre-tabla-cortar-madera-rustica_670382-147766.jpg',
    descripcion: 'Taco de carne de ternera con cebolla y cilantro.',
  },
  {
    id: 2,
    nombre: 'Taco de Pollo',
    precio: 350,
    descuento: 15, 
    imagen: 'https://assets.unileversolutions.com/recipes-v2/234747.jpg',
    descripcion: 'Taco de pollo asado con salsa y vegetales.',
  },
];

function DetalleTacos() {
  const { id } = useParams();
  const taco = tacosData.find(t => t.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    alert(`Agregaste ${cantidad} ${taco.nombre} al carrito.`);
  };

  if (!taco) return <p>Taco no encontrado.</p>;


  const precioFinal = taco.descuento 
    ? Math.round(taco.precio * (1 - taco.descuento / 100)) 
    : taco.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-taco">
      <h1>{taco.nombre}</h1>
      <img src={taco.imagen} alt={taco.nombre} className="imagen-ampliada" />
      <p>Descripción: {taco.descripcion}</p>
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
      <p>Precio por Taco: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/tacos">Volver a Tacos</Link>
    </div>
  );
}

export default DetalleTacos;
