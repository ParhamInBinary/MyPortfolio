import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { ThreeHexagons } from '../../../hexagons';
import { LunaComponent } from './components';

export const WorkExpComponent = () => {
  const { workExp } = resumeStrings.title;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h5">{workExp}</Typography>
      <Box>
        <LunaComponent />
        <ThreeHexagons />
      </Box>
    </Box>
  );
};
