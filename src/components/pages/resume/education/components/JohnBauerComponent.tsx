import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../../assets/strings';

export const JohnBauerComponent = () => {
  const { title, date, subtitle, courses } = resumeStrings.school.johnBauer;
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h3">{date}</Typography>
          <Typography variant="h2">{subtitle}</Typography>
        </Box>

        <Typography variant="h2">{courses.first.title}</Typography>
        <Typography variant="h2">{courses.second.title}</Typography>
      </Box>
    </>
  );
};
