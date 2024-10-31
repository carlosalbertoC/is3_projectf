import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    try {
      // Llamada a la API de autenticación del backend
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username: email,
        password: password,
      });
      
      // Si el login es exitoso, guarda el token en el almacenamiento local
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setSuccess(true);
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Login successful!</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/register')} // Redirige a la página de registro
          >
            Registrarse
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
