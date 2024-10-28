import React from 'react';
import { Link } from 'react-router-dom';
import './Hamburguesas.css';

function Hamburguesas() {
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

  return (
    <div className="hamburguesas">
      <h1>Tipos de Hamburguesas</h1>
      <div className="lista-hamburguesas">
        {hamburguesasData.map((hamburguesa) => (
          <div key={hamburguesa.id} className="hamburguesa-card">
            <Link to={`/hamburguesas/${hamburguesa.id}`}>
              <img src={hamburguesa.imagen} alt={hamburguesa.nombre} />
              <h2>{hamburguesa.nombre}</h2>
              <p>Precio: ${hamburguesa.precio}</p>
              {hamburguesa.descuento && (
                <p>
                  Descuento: {hamburguesa.descuento}%
                  <br />
                  Precio con Descuento: ${Math.round(hamburguesa.precio * (1 - hamburguesa.descuento / 100))}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamburguesas;
