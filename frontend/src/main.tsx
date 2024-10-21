import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.tsx'
//import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6fa9b3',
    },
    secondary: {
      main: '#b3796f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#c2ced6',
    },
    error: {
      main: '#d02b20',
    },
    text: {
      secondary: '#a22929',
    },
  },
  typography: {
    fontFamily: 'Droid Serif',
    fontSize: 14,
    fontWeightLight: 300,
    button: {
      fontSize: '0.875rem',
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Login />
    </ThemeProvider>
  </StrictMode>,
)
