import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detallePizzas.css'; 

function DetallePizza() {
  const { id } = useParams();
  const pizzasData = [
    {
      id: 1,
      nombre: 'Pizza Margarita',
      precio: 500,
      imagen: 'https://www.clarin.com/img/2023/08/01/SL3EslnOA_1200x630__1.jpg',
      descripcion: 'Salsa de tomate, mozzarella, albahaca fresca.',
    },
    {
      id: 2,
      nombre: 'Pizza Pepperoni',
      precio: 700,
      imagen: 'https://i.blogs.es/ef28b9/como-hacer-pizza-de-pepperoni-1-/1366_2000.jpg',
      descripcion: 'Salsa de tomate, mozzarella y rodajas de pepperoni.',
    },
    {
      id: 3,
      nombre: 'Pizza Cuatro Quesos',
      precio: 650,
      imagen: 'https://img.freepik.com/fotos-premium/pizza-cuatro-quesos-sobre-fondo-decorado_219193-5948.jpg',
      descripcion: 'Mozzarella, gorgonzola, parmesano y ricotta.',
    },
    {
      id: 4,
      nombre: 'Pizza Vegetariana',
      precio: 600,
      imagen: 'https://yayaya.com.ec/wp-content/uploads/2021/07/pizza-vegetariana.jpg',
      descripcion: 'Salsa de tomate, mozzarella, pimientos, cebolla y champiñones.',
    },
    {
      id: 5,
      nombre: 'Pizza BBQ',
      precio: 550,
      imagen: 'https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/food-and-nutrition/buffalo-chicken-pizza-recipe-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1295&hash=F90EA46680CD5881F038C257A79313D5',
      descripcion: 'Salsa BBQ, pollo, cebolla y mozzarella.',
    },
  ];

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

  const precioFinal = pizza.precio; 
  const totalPrecio = precioFinal * cantidad;

  return (
    <div className="detalle-pizza">
      <h1>{pizza.nombre}</h1>
      <img src={pizza.imagen} alt={pizza.nombre} className="imagen-ampliada" />
      <p>Descripción: {pizza.descripcion}</p>
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
      <p>Precio por Pizza: ${precioFinal}</p>
      <p>Total: ${totalPrecio}</p>
      <button onClick={handleAddToCart} className="btn-agregar">Agregar al Carrito</button>
      <Link to="/pizzas" className="link-volver">Volver a Pizzas</Link>
    </div>
  );
}

export default DetallePizza;