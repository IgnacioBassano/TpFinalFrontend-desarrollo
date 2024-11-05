import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detalleBebidas.css';

const bebidasData = [
  {
    id: 1,
    nombre: 'Coca Cola',
    precio: 150,
    descuento: null,
    imagen: 'https://atracon.es/wp-content/uploads/2020/10/cola-350-vr.jpg',
    descripcion: 'Refresco de cola.',
  },
  {
    id: 2,
    nombre: 'Sprite',
    precio: 150,
    descuento: 5,
    imagen: 'https://elperri.es/wp-content/uploads/2024/07/sprite.png',
    descripcion: 'Refresco sabor limón-lima.',
  },
  {
    id: 3,
    nombre: 'Agua Mineral',
    precio: 100,
    descuento: null,
    imagen: 'https://hiperlibertad.vtexassets.com/arquivos/ids/222635-800-auto?v=638490729650270000&width=800&height=auto&aspect=true',
    descripcion: 'Agua mineral con gas.',
  },
];

function DetalleBebidas() {
  const { id } = useParams();
  const bebida = bebidasData.find(b => b.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1);
  const [observaciones, setObservaciones] = useState('');

  const handleAddToCart = () => {
    if (observaciones.length < 150) {
      alert('Las observaciones deben tener al menos 150 caracteres.');
      return;
    }
    alert(`Agregaste ${cantidad} ${bebida.nombre} al carrito.`);
  };

  if (!bebida) return <p>Bebida no encontrada.</p>;

  
  const precioFinal = bebida.descuento 
    ? Math.round(bebida.precio * (1 - bebida.descuento / 100)) 
    : bebida.precio;

  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-bebida">
      <h1>{bebida.nombre}</h1>
      <img src={bebida.imagen} alt={bebida.nombre} className="imagen-ampliada" />
      <p>Descripción: {bebida.descripcion}</p>
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
      <p>Precio por Bebida: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/bebidas">Volver a Bebidas</Link>
    </div>
  );
}

export default DetalleBebidas;
