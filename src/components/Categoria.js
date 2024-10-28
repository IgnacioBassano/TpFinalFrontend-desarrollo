// src/components/Categoria.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css'; // Importa el CSS para estilos específicos de la categoría

function Categoria() {
  return (
    <div className="categoria">
      <h1>Categoría</h1>
      <div className="botones-categoria">
        <Link to="/hamburguesas" className="boton-categoria">Hamburguesas</Link>
        <Link to="/pizzas" className="boton-categoria">Pizzas</Link>
        <Link to="/sandwiches" className="boton-categoria">Sándwiches</Link>
        <Link to="/tablas" className="boton-categoria">Tablas</Link>
        <Link to="/tacos" className="boton-categoria">Tacos</Link>
        <Link to="/bebidas" className="boton-categoria">Bebidas</Link>
      </div>
    </div>
  );
}

export default Categoria;
