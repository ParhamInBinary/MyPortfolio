import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../../assets/strings';

export const LunaComponent = () => {
  const { date, desc, title } = resumeStrings.workExp.lunaCreatives;
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="h3">{date}</Typography>
          <Typography variant="h2">{desc}</Typography>
        </Box>
      </Box>
    </>
  );
};
