import { Box, Typography } from '@mui/material';

import { homeStrings } from '../../../../assets/strings';
import { SloganContainer } from './styles';

export const SloganContainerComponent = () => {
  const { slogan } = homeStrings;
  return (
    <SloganContainer>
      <Typography variant="subtitle1">{slogan.title}</Typography>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Typography variant="subtitle2">{slogan.subtitleRegular}</Typography>
        <Typography variant="caption">{slogan.subtitleStyled}</Typography>
      </Box>
    </SloganContainer>
  );
};
