// src/components/Inicio.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bienvenido al Restaurante</h1>
      <p>Selecciona una opción del menú.</p>

      {/* Botones de categorías */}
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => navigate('/hamburguesas')} style={buttonStyle}>
          Hamburguesas
        </button>
        <button onClick={() => navigate('/pizzas')} style={buttonStyle}>
          Pizzas
        </button>
        <button onClick={() => navigate('/sandwiches')} style={buttonStyle}>
          Sándwiches
        </button>
        <button onClick={() => navigate('/tablas')} style={buttonStyle}>
          Tablas
        </button>
        <button onClick={() => navigate('/tacos')} style={buttonStyle}>
          Tacos
        </button>
        <button onClick={() => navigate('/bebidas')} style={buttonStyle}>
          Bebidas
        </button>
      </div>

      {/* Información adicional o productos se puede agregar aquí */}
      <div>
        <h2>Nuestras Especialidades</h2>
        <p>Aquí puedes encontrar una variedad de productos deliciosos que ofrecemos.</p>
      </div>
    </div>
  );
}

// Estilos para los botones
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007BFF',
  color: 'white',
  transition: 'background-color 0.3s',
};

export default Inicio;

