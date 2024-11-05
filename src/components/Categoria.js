import React from 'react';
import CategoriaCard from './CategoriaCard'; 
import './Categoria.css';

const categoriasData = [
  { id: 1, nombre: 'Hamburguesas', imagen: 'https://www.carniceriademadrid.es/wp-content/uploads/2022/09/smash-burger-que-es.jpg', link: '/hamburguesas' },
  { id: 2, nombre: 'Pizzas', imagen: 'https://i.blogs.es/fff4ca/pizzas/1366_2000.jpg', link: '/pizzas' },
  { id: 3, nombre: 'Sandwiches', imagen: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/ymr7g8nfi5_portadasandwich-1024x683.jpg.webp', link: '/sandwiches' },
  { id: 4, nombre: 'Tablas', imagen: 'https://i.blogs.es/e57c18/tablas-quesos-pates-y-embutidos/1366_2000.jpeg', link: '/tablas' },
  { id: 5, nombre: 'Tacos', imagen: 'https://i.pinimg.com/236x/29/cc/ab/29ccab99a172f508e5bb9d75fcff1ccb.jpg', link: '/tacos' },
  { id: 6, nombre: 'Bebidas', imagen: 'https://www.clarin.com/img/2021/05/04/eW8Rut3-o_600x600__1.jpg', link: '/bebidas' },
];

function Categoria() {
  return (
    <div className="categorias">
      <h1>Categorías de Comidas y Bebidas</h1>
      <div className="lista-categorias">
        {categoriasData.map((categoria) => (
          <CategoriaCard
            key={categoria.id}
            nombre={categoria.nombre}
            imagen={categoria.imagen}
            link={categoria.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Categoria;