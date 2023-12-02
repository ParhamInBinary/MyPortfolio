import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}));

export const SubContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 2,
  color: '#FFF',
  gap: '38%'
}));

export const NameBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginLeft: 10
}));

export const RoleBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export const SloganContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  color: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
}));
