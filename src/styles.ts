import { Box, styled } from '@mui/material';

import backgroundImage from './assets/images/file-gQI37C6d5FIBGFIuY8wvcXb7.png';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));
