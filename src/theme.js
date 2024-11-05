
import { createTheme } from '@mui/material/styles';


const primaryColor = '#FF5722'; 
const secondaryColor = '#FFC107'; 
const backgroundColor = '#f5f5f5'; 
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
      paper: '#ffffff', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      color: primaryColor,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: primaryColor,
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', 
          textTransform: 'none', 
          padding: '8px 16px', 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        },
      },
    },
  },
});

export default theme;