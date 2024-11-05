import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriaCard.css';

function CategoriaCard({ nombre, imagen, link }) {
  return (
    <Link to={link} className="categoria-card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
    </Link>
  );
}

export default CategoriaCard;