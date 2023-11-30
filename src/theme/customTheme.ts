import { createTheme } from '@mui/material/styles';


export const customTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#1976d2', // Your primary color
  //   },
  //   secondary: {
  //     main: '#f50057', // Your secondary color
  //   },
  //   // Add more customizations to the palette if needed
  // },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '36px',
    },
    h3: {
      fontSize: 28,
      letterSpacing: 12,
    },
    h4: {
      fontSize: '24px',
    },
  },
  // Add other customizations to the theme as needed
});
