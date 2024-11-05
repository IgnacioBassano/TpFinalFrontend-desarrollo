import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './pizzas.css';

function Pizzas() {
  const pizzasData = [
    {
      id: 1,
      nombre: 'Pizza Margarita',
      precio: 500,
      descuento: 10,
      imagen: 'https://www.clarin.com/img/2023/08/01/SL3EslnOA_1200x630__1.jpg',
      descripcion: 'Salsa de tomate, mozzarella, albahaca fresca.',
    },
    {
      id: 2,
      nombre: 'Pizza Pepperoni',
      precio: 700,
      descuento: 15,
      imagen: 'https://i.blogs.es/ef28b9/como-hacer-pizza-de-pepperoni-1-/1366_2000.jpg',
      descripcion: 'Salsa de tomate, mozzarella y rodajas de pepperoni.',
    },
    {
      id: 3,
      nombre: 'Pizza Cuatro Quesos',
      precio: 650,
      descuento: 5,
      imagen: 'https://img.freepik.com/fotos-premium/pizza-cuatro-quesos-sobre-fondo-decorado_219193-5948.jpg',
      descripcion: 'Mozzarella, gorgonzola, parmesano y ricotta.',
    },
    {
      id: 4,
      nombre: 'Pizza Vegetariana',
      precio: 600,
      descuento: 20,
      imagen: 'https://yayaya.com.ec/wp-content/uploads/2021/07/pizza-vegetariana.jpg',
      descripcion: 'Salsa de tomate, mozzarella, pimientos, cebolla y champiñones.',
    },
    {
      id: 5,
      nombre: 'Pizza BBQ',
      precio: 550,
      descuento: null,
      imagen: 'https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/food-and-nutrition/buffalo-chicken-pizza-recipe-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1295&hash=F90EA46680CD5881F038C257A79313D5',
      descripcion: 'Salsa BBQ, pollo, cebolla y mozzarella.',
    },
  ];

  return (
    <div className="pizzas">
      <h1>Tipos de Pizzas</h1>
      <Grid container spacing={4}>
        {pizzasData.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <Card className="pizza-card" elevation={3}>
              <Link to={`/pizzas/${pizza.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={pizza.imagen}
                  alt={pizza.nombre}
                  title={pizza.nombre}
                  style={{ height: 200, objectFit: 'cover' }} 
                />
                <CardContent>
                  <Typography variant="h5" component="h2">{pizza.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Precio: ${pizza.precio}
                  </Typography>
                  {pizza.descuento && (
                    <Typography variant="body2" color="textSecondary">
                      Descuento: {pizza.descuento}%<br />
                      Precio con Descuento: ${Math.round(pizza.precio * (1 - pizza.descuento / 100))}
                    </Typography>
                  )}
                  <Typography variant="body2">{pizza.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Pizzas;