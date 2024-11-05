import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetalleHamburguesa.css'; 

function DetalleHamburguesa() {
  const { id } = useParams();
  const hamburguesasData = [
    {
      id: 1,
      nombre: 'Hamburguesa Clásica',
      precio: 500,
      descuento: 10,
      imagen: 'https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/a/base-bembos-clasica_1.jpg',
      descripcion: 'Carne de res, lechuga, tomate, cebolla y mayonesa.',
    },
    {
      id: 2,
      nombre: 'Hamburguesa Doble Queso',
      precio: 700,
      descuento: 15,
      imagen: 'https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-a-photo-big-double-cheddar-cheeseburger-with-chicken-cutlet-image_3108377.jpg',
      descripcion: 'Carne de res, doble queso, lechuga y ketchup.',
    },
    {
      id: 3,
      nombre: 'Hamburguesa BBQ',
      precio: 650,
      descuento: 5,
      imagen: 'https://img.freepik.com/fotos-premium/jugosa-hamburguesa-cerdo-desmenuzado-salsa-bbq_151349-1778.jpg',
      descripcion: 'Carne de res, salsa BBQ, cebolla y queso cheddar.',
    },
    {
      id: 4,
      nombre: 'Hamburguesa Picante',
      precio: 600,
      descuento: 20,
      imagen: 'https://vidapicante.com/wp-content/uploads/2023/09/receta-hamburguesa-chipotle.jpg',
      descripcion: 'Carne de res, jalapeños, salsa picante y cebolla.',
    },
    {
      id: 5,
      nombre: 'Hamburguesa Vegetariana',
      precio: 550,
      descuento: null,
      imagen: 'https://granvita.com/wp-content/uploads/2024/06/hamburguesas-vegetarianas-recetas.jpg',
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
      <p>Precio por Hamburguesa: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart} className="btn-agregar">Agregar al Carrito</button>
      <Link to="/hamburguesas" className="link-volver">Volver a Hamburguesas</Link>
    </div>
  );
}

export default DetalleHamburguesa;