import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './sandwiches.css';

const sandwichesData = [
  {
    id: 1,
    nombre: 'Sandwich de Pollo',
    precio: 500,
    descuento: 10,
    imagen: 'https://imag.bonviveur.com/sandwich-de-pollo.jpg',
    descripcion: 'Pan, pechuga de pollo, lechuga, mayonesa.',
  },
  {
    id: 2,
    nombre: 'Sandwich Vegetariano',
    precio: 450,
    descuento: null,
    imagen: 'https://file-cdn.mercyforanimals.org/mercy4animals.wpengine.com/sites/446/2019/06/sandwisches-veganos.jpg',
    descripcion: 'Pan, aguacate, tomate, lechuga, hummus.',
  },
  {
    id: 3,
    nombre: 'Sandwich de Jamón y Queso',
    precio: 480,
    descuento: 5,
    imagen: 'https://www.bimbo.es/uploads/11-sandwich-con-queso-lechuga-tomate-mayonesa-y-pechuga-de-pavo-a-las-finas-hierbas.webp',
    descripcion: 'Pan, jamón, queso, mostaza.',
  },
];

function Sandwiches() {
  return (
    <div className="sandwiches">
      <h1>Tipos de Sandwiches</h1>
      <Grid container spacing={4}>
        {sandwichesData.map((sandwich) => (
          <Grid item xs={12} sm={6} md={4} key={sandwich.id}>
            <Card className="sandwich-card" elevation={3}>
              <Link to={`/sandwiches/${sandwich.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={sandwich.imagen}
                  alt={sandwich.nombre}
                  title={sandwich.nombre}
                  style={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">{sandwich.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Precio: ${sandwich.precio}
                  </Typography>
                  {sandwich.descuento && (
                    <Typography variant="body2" color="textSecondary">
                      Descuento: {sandwich.descuento}%<br />
                      Precio con Descuento: ${Math.round(sandwich.precio * (1 - sandwich.descuento / 100))}
                    </Typography>
                  )}
                  <Typography variant="body2" style={{ marginTop: '8px' }}>{sandwich.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Sandwiches;