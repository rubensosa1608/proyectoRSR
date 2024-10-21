import Typography from '@mui/material/Typography'; 
import { Button } from '@mui/material';
import { Container } from '@mui/material';

 function Login() {
    return (
      <Container>
       <Typography variant="h1" color='secundary'>Pagina de Login de Rubén Sosa Ramos.</Typography>
       <Typography variant="h2">Pagina de Login de Rubén Sosa Ramos.</Typography>
       <Typography variant="h4" color='secundary'>Pagina de Login de Rubén Sosa Ramos.</Typography>
       <Typography variant="subtitle1">Pagina de Login de Rubén Sosa Ramos.</Typography>
       <Typography variant="body1" color='secundary'>Pagina de Login de Rubén Sosa Ramos.</Typography>
       <Button variant='contained' color='secondary'>Esto es un botón</Button>
       <Button variant='outlined' color='success'>Esto es un botón</Button>
       <Button variant='text' color='warning'>Esto es un botón</Button>
       <Button variant='contained' color='error'>Esto es un botón</Button>
       <Button variant='text' color='info'>Esto es un botón</Button>
       <Button variant='outlined' color='primary'>Esto es un botón</Button>
      </Container>
    );
  }
  
  export default Login