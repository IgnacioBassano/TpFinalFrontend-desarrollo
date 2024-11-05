import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './Hamburguesas.css';

function Hamburguesas() {
  const hamburguesasData = [
    {
      id: 1,
      nombre: 'Hamburguesa Clásica',
      precio: 500,
      descuento: 10,
      imagen: 'https://d31npzejelj8v1.cloudfront.net/media/catalog/product/b/a/base-bembos-clasica_1.jpg',
      descripcion: 'Carne de res, lechuga, tomate, cebolla y mayonesa.',
    },
    {
      id: 2,
      nombre: 'Hamburguesa Doble Queso',
      precio: 700,
      descuento: 15,
      imagen: 'https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-a-photo-big-double-cheddar-cheeseburger-with-chicken-cutlet-image_3108377.jpg',
      descripcion: 'Carne de res, doble queso, lechuga y ketchup.',
    },
    {
      id: 3,
      nombre: 'Hamburguesa BBQ',
      precio: 650,
      descuento: 5,
      imagen: 'https://img.freepik.com/fotos-premium/jugosa-hamburguesa-cerdo-desmenuzado-salsa-bbq_151349-1778.jpg',
      descripcion: 'Carne de res, salsa BBQ, cebolla y queso cheddar.',
    },
    {
      id: 4,
      nombre: 'Hamburguesa Picante',
      precio: 600,
      descuento: 20,
      imagen: 'https://vidapicante.com/wp-content/uploads/2023/09/receta-hamburguesa-chipotle.jpg',
      descripcion: 'Carne de res, jalapeños, salsa picante y cebolla.',
    },
    {
      id: 5,
      nombre: 'Hamburguesa Vegetariana',
      precio: 550,
      descuento: null,
      imagen: 'https://granvita.com/wp-content/uploads/2024/06/hamburguesas-vegetarianas-recetas.jpg',
      descripcion: 'Hamburguesa de garbanzos, lechuga, tomate y aguacate.',
    },
  ];

  return (
    <div className="hamburguesas">
      <h1>Tipos de Hamburguesas</h1>
      <Grid container spacing={4}>
        {hamburguesasData.map((hamburguesa) => (
          <Grid item xs={12} sm={6} md={4} key={hamburguesa.id}>
            <Card className="hamburguesa-card" elevation={3}>
              <Link to={`/hamburguesas/${hamburguesa.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={hamburguesa.imagen}
                  alt={hamburguesa.nombre}
                  title={hamburguesa.nombre}
                  style={{ height: 200, objectFit: 'cover' }} 
                />
                <CardContent>
                  <Typography variant="h5" component="h2">{hamburguesa.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Precio: ${hamburguesa.precio}
                  </Typography>
                  {hamburguesa.descuento && (
                    <Typography variant="body2" color="textSecondary">
                      Descuento: {hamburguesa.descuento}%
                      <br />
                      Precio con Descuento: ${Math.round(hamburguesa.precio * (1 - hamburguesa.descuento / 100))}
                    </Typography>
                  )}
                  <Typography variant="body2">{hamburguesa.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Hamburguesas;