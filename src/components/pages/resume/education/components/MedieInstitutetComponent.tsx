import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../../assets/strings';

export const MedieinstitutetComponent = () => {
  const { school } = resumeStrings;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box>
          <Typography variant="h4">{school.medieinstitutet.title}</Typography>

          <Typography variant="h3">{school.medieinstitutet.date}</Typography>
          <Typography variant="h2">
            {school.medieinstitutet.subtitle}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" sx={{ display: 'flex', flex: 1 }}>
            {school.medieinstitutet.courses.first.title}
          </Typography>
          <Typography variant="h2">
            {school.medieinstitutet.courses.first.desc}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1">
            {school.medieinstitutet.courses.second.title}
          </Typography>
          <Typography variant="h2">
            {school.medieinstitutet.courses.second.desc}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1">
            {school.medieinstitutet.courses.third.title}
          </Typography>
          <Typography variant="h2">
            {school.medieinstitutet.courses.third.desc}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1">
            {school.medieinstitutet.courses.fourth.title}
          </Typography>
          <Typography variant="h2">
            {school.medieinstitutet.courses.fourth.desc}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
