import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './tablas.css';

const tablasData = [
  {
    id: 1,
    nombre: 'Tabla de Carnes',
    precio: 120,
    imagen: 'https://img.freepik.com/fotos-premium/cerrar-variedad-carnes-asadas-tabla-madera_219193-3649.jpg?w=360',
    descripcion: 'Deliciosa selección de carnes.',
  },
  {
    id: 2,
    nombre: 'Tabla de Quesos',
    precio: 100,
    imagen: 'https://images.mrcook.app/recipe-image/0190f02a-e1bc-7ccd-adad-ff4b9d5c638d',
    descripcion: 'Exquisita variedad de quesos.',
  },
  {
    id: 3,
    nombre: 'Tabla Mixta',
    precio: 150,
    imagen: 'https://www.cashfresh.es/wp-content/uploads/2020/12/Post-23-diciembre-BC-1030x687.jpg',
    descripcion: 'Combinación de carnes y quesos.',
  },
];

function Tablas() {
  return (
    <div className="tablas">
      <h1>Tipos de Tablas</h1>
      <Grid container spacing={4}>
        {tablasData.map((tabla) => (
          <Grid item xs={12} sm={6} md={4} key={tabla.id}>
            <Card className="tabla-card" elevation={3}>
              <Link to={`/tablas/${tabla.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={tabla.imagen}
                  alt={tabla.nombre}
                  title={tabla.nombre}
                  style={{ height: 200, objectFit: 'cover' }} 
                />
                <CardContent>
                  <Typography variant="h5" component="h2">{tabla.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Precio: ${tabla.precio}
                  </Typography>
                  <Typography variant="body2">{tabla.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Tablas;
