import { Box, styled } from '@mui/material';

export const OpacityBG = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  opacity: 0.5,
}));

export const HomeContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}));

export const ProjectsContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  zIndex: 1,
}));

export const AboutMeContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  zIndex: 1,
}));

export const ResumeContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  color: '#FFF',
  padding: '30px 60px',
  zIndex: 1,
}));

export const ContactContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  zIndex: 1,
}));
