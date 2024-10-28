// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar({ onSearch }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header>
      <button onClick={toggleMenu} aria-expanded={menuVisible} aria-label="Abrir menú">
        ☰
      </button>
      {menuVisible && (
        <div className="menu" role="menu">
          <Link to="/" onClick={() => setMenuVisible(false)}>Inicio</Link>
          <Link to="/informacion" onClick={() => setMenuVisible(false)}>Información</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuVisible(false)}>
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuVisible(false)}>
            Facebook
          </a>
        </div>
      )}
    </header>
  );
}

export default NavBar;
