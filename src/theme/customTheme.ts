import { createTheme } from '@mui/material/styles';

// const googleFontsLink =
//   'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Kanit&family=Rajdhani&display=swap';

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
    fontFamily: 'Kanit, sans-serif',
    h6: {
      fontSize: 32,
      letterSpacing: 10,
      fontWeight: 700,
    },
    body1: {
      fontSize: 48,
      letterSpacing: 8,
      fontWeight: 700,
    },
    body2: {
      fontSize: 48,
      letterSpacing: 12,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 48,
      fontFamily: 'Rajdhani, sans-serif',
      letterSpacing: 6,
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
