import Typography from '@mui/material/Typography'; 
import { Button } from '@mui/material';
import { Container } from '@mui/material';

function Login() {
  return (
    <Container>
      <header>
        <Typography variant="h1" sx={{ color: 'secondary.main', marginBottom: 2 }}>
          Pagina de Login de Rubén Sosa Ramos.
        </Typography>
      </header>
      
      <main>
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
          Bienvenido
        </Typography>
        <Typography variant="h4" sx={{ color: 'secondary.main', marginBottom: 2 }}>
          Inicia sesión para continuar
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Ingresa tus credenciales
        </Typography>
        <Typography variant="body1" sx={{ color: 'secondary.main', marginBottom: 4 }}>
          Si no tienes cuenta, regístrate.
        </Typography>

        {/* Botones organizados */}
        <Button variant="contained" color="secondary" sx={{ marginRight: 1 }}>
          Iniciar sesión
        </Button>
        <Button variant="outlined" color="success" sx={{ marginRight: 1 }}>
          Registrarse
        </Button>
        <Button variant="text" color="warning" sx={{ marginRight: 1 }}>
          ¿Olvidaste tu contraseña?
        </Button>
      </main>

      <footer>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 4 }}>
          &copy; 2024 Rubén Sosa Ramos. Todos los derechos reservados.
        </Typography>
      </footer>
    </Container>
  );
}

export default Login;
