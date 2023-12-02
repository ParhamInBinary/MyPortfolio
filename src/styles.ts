import { Box, styled } from '@mui/material';

import backgroundImage from './assets/images/bg.png';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
}));
