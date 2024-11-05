import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Rating } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './informacion.css';

function Informacion() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    setMessage('¡Gracias por su queja!');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="informacion-container">
      <Card className="informacion-card" elevation={3}>
        <CardContent>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Información del Restaurante
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <strong>Días de apertura:</strong> Lunes a Domingo
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <strong>Horarios:</strong> 10:00 AM - 10:00 PM
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <strong>Contacto:</strong> foodtruck@hotmail.com
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ContactMailIcon />}
            href="mailto:ejemplo@restaurante.com"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Contáctanos
          </Button>
          
          <Typography variant="h6" align="center" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Quejas
          </Typography>
          <TextField
            label="Tu Queja"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={feedback}
            onChange={handleFeedbackChange}
            style={{ marginTop: '10px' }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            fullWidth
            style={{ marginTop: '10px' }}
          >
            Enviar Queja
          </Button>
          {message && (
            <Typography variant="body2" color="green" align="center" style={{ marginTop: '10px' }}>
              {message}
            </Typography>
          )}
          
          <Typography variant="h6" align="center" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Valoración
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={0.5
              } 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Informacion;