import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './Tacos.css';

function Tacos() {
  const tacosData = [
    {
      id: 1,
      nombre: 'Taco de Ternera',
      precio: 400,
      descuento: 10,
      imagen: 'https://img.freepik.com/fotos-premium/taco-ternera-recien-asado-sobre-tabla-cortar-madera-rustica_670382-147766.jpg',
      descripcion: 'Taco de carne de ternera con cebolla y cilantro.',
    },
    {
      id: 2,
      nombre: 'Taco de Pollo',
      precio: 350,
      descuento: 15,
      imagen: 'https://assets.unileversolutions.com/recipes-v2/234747.jpg',
      descripcion: 'Taco de pollo asado con salsa y vegetales.',
    },
  ];

  return (
    <div className="tacos">
      <h1 style={{ textAlign: 'center' }}>Tipos de Tacos</h1>
      <Grid container spacing={4} justifyContent="center">
        {tacosData.map((taco) => (
          <Grid item xs={12} sm={6} md={4} key={taco.id}>
            <Card className="taco-card" elevation={3}>
              <Link to={`/tacos/${taco.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={taco.imagen}
                  alt={taco.nombre}
                  title={taco.nombre}
                  style={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" style={{ textAlign: 'center' }}>{taco.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                    Precio: ${taco.precio}
                  </Typography>
                  {taco.descuento && (
                    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                      Descuento: {taco.descuento}%<br />
                      Precio con Descuento: ${Math.round(taco.precio * (1 - taco.descuento / 100))}
                    </Typography>
                  )}
                  <Typography variant="body2" style={{ textAlign: 'center', marginTop: '8px' }}>{taco.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Tacos;