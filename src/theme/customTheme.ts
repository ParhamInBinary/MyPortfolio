import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
    h1: {
      fontSize: 24,
      letterSpacing: 4,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      letterSpacing: 4,
      fontWeight: 400,
    },
    h3: {
      fontSize: 32,
      letterSpacing: 4,
      fontWeight: 700,
    },
    h4: {
      fontSize: 36,
      letterSpacing: 4,
      fontWeight: 400,
    },
    h5: {
      fontSize: 36,
      letterSpacing: 10,
      fontWeight: 600,
    },
    h6: {
      fontSize: 32,
      letterSpacing: 10,
      fontWeight: 600,
    },
    body1: {
      fontSize: 48,
      letterSpacing: 8,
      fontWeight: 600,
    },
    body2: {
      fontSize: 48,
      letterSpacing: 12,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 48,
      letterSpacing: 6,
      fontFamily: 'Rajdhani, sans-serif',
    },
    subtitle2: {
      fontSize: 32,
      fontFamily: 'Rajdhani, sans-serif',
    },
    caption: {
      fontSize: 32,
      fontFamily: 'Dancing Script, cursive',
    },
  },
  // Add other customizations to the theme as needed
});
