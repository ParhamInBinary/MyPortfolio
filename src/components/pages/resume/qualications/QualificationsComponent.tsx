import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { ThreeHexagons } from '../../../hexagons';

export const QualificationsComponent = () => {
  const { title, qualifications } = resumeStrings;
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h5">{title.qualifications}</Typography>
      <Typography variant="h2">{qualifications.desc}</Typography>
      <ThreeHexagons />
    </Box>
  );
};
