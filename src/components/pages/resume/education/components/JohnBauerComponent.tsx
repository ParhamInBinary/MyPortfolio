import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../../assets/strings';

export const JohnBauerComponent = () => {
  const { school } = resumeStrings;
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box>
          <Typography variant="h4">{school.johnBauer.title}</Typography>
          <Typography variant="h3">{school.johnBauer.date}</Typography>
          <Typography variant="h2">{school.johnBauer.subtitle}</Typography>
        </Box>

        <Typography variant="h2">
          {school.johnBauer.courses.first.title}
        </Typography>
        <Typography variant="h2">
          {school.johnBauer.courses.second.title}
        </Typography>
      </Box>
    </>
  );
};
