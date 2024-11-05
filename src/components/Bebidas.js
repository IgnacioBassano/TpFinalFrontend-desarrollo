import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import './Bebidas.css';

function Bebidas() {
  const bebidasData = [
    {
      id: 1,
      nombre: 'Coca Cola',
      precio: 150,
      descuento: null,
      imagen: 'https://atracon.es/wp-content/uploads/2020/10/cola-350-vr.jpg',
      descripcion: 'Refresco de cola.',
    },
    {
      id: 2,
      nombre: 'Sprite',
      precio: 150,
      descuento: 5,
      imagen: 'https://elperri.es/wp-content/uploads/2024/07/sprite.png',
      descripcion: 'Refresco sabor limón-lima.',
    },
    {
      id: 3,
      nombre: 'Agua Mineral',
      precio: 100,
      descuento: null,
      imagen: 'https://hiperlibertad.vtexassets.com/arquivos/ids/222635-800-auto?v=638490729650270000&width=800&height=auto&aspect=true',
      descripcion: 'Agua mineral con gas.',
    },
  ];

  return (
    <div className="bebidas">
      <Typography variant="h4" component="h1" align="center" gutterBottom style={{ fontWeight: 'bold' }}> {}
        Tipos de Bebidas
      </Typography>
      <Grid container spacing={4}>
        {bebidasData.map((bebida) => (
          <Grid item xs={12} sm={6} md={4} key={bebida.id}>
            <Card className="bebida-card" elevation={3}>
              <Link to={`/bebidas/${bebida.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  image={bebida.imagen}
                  alt={bebida.nombre}
                  title={bebida.nombre}
                  style={{ height: 200, objectFit: 'cover' }} 
                />
                <CardContent>
                  <Typography variant="h5" component="h2" align="center">{bebida.nombre}</Typography>
                  <Typography variant="body2" color="textSecondary" align="center">
                    Precio: ${bebida.precio}
                  </Typography>
                  {bebida.descuento && (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Descuento: {bebida.descuento}%
                      <br />
                      Precio con Descuento: ${Math.round(bebida.precio * (1 - bebida.descuento / 100))}
                    </Typography>
                  )}
                  <Typography variant="body2" align="center">{bebida.descripcion}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Bebidas;