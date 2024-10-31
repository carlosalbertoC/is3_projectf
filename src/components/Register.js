import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert, MenuItem } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    try {
      // Llamada a la API de registro del backend
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        nationality
      });

      // Si el registro es exitoso
      if (response.data.token) {
        setSuccess(true);
      }
    } catch (err) {
      setError('Error during registration. Please check your input.');
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            select
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
            <MenuItem value="OTHER">Other</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Registration successful!</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;