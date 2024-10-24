import React, { useState } from 'react';
import { TextField, Container, Button, Box, Typography, Paper, Alert } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function Login() {

  const usuarioCorrecto = "admin";
  const passwordCorrecta = "1234";

  // Estado para manejar los valores del formulario
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  // Estado para manejar las alertas
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'warning' | null>(null);

  // Manejar el cambio en los inputs
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,  // Actualizamos la propiedad correcta (username o password)
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Verificación de credenciales
    if (data.username === usuarioCorrecto && data.password === passwordCorrecta) {
      setAlertMessage('Acceso exitoso.');
      setAlertSeverity('success');
    } else {
      setAlertMessage('Usuario o contraseña incorrectos.');
      setAlertSeverity('warning');
    }
  };

  return (
    <Container>
      <header></header>

      <main>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Paper elevation={3} sx={{ padding: 4, width: 1000, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'monospace', marginBottom: 2 }}>
              Sistema de acceso
            </Typography>

            <LockIcon sx={{ fontSize: 40, marginBottom: 2 }} />

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Usuario"
                name="username"
                variant="outlined"
                margin="normal"
                value={data.username}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                variant="outlined"
                margin="normal"
                value={data.password}
                onChange={handleChange}
                required
              />

              <Button
                variant="contained"
                fullWidth
                type="submit"
              >
                ACCEDER
              </Button>
            </form>

            {alertMessage && (
              <Alert severity={alertSeverity} sx={{ marginTop: 2 }}>
                {alertMessage}
              </Alert>
            )}
          </Paper>
        </Box>
      </main>

      <footer></footer>
    </Container>
  );
}

export default Login;
