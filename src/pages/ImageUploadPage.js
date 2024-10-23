import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const ImageUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  // Manejar la selección de archivo
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Manejar el envío del archivo
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage('Por favor selecciona una imagen primero.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      // Puedes enviar los datos al backend con axios, pero aquí simularé una solicitud exitosa
      // await axios.post('http://localhost:5000/upload', formData);

      // Simulando una respuesta exitosa
      setTimeout(() => {
        setMessage('Imagen recibida correctamente.');
      }, 1000);
      
    } catch (error) {
      setMessage('Hubo un error al subir la imagen.');
    }
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Subir Imagen
      </Typography>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Subir Imagen
        </Button>
      </form>
      {message && (
        <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default ImageUploadPage;
