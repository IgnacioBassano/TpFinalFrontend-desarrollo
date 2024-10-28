// src/components/DetalleProducto.js
import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { idProducto } = useParams();

  return (
    <div>
      <h2>Detalles del Producto {idProducto}</h2>
      <p>Información del producto aquí...</p>
    </div>
  );
}

export default DetalleProducto;
