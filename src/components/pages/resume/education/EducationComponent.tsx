import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { EducationContainer } from './styles';

export const EducationComponent = () => {
  const { title, school, workExp, qualifications } = resumeStrings;

  return (
    <EducationContainer>
        <Typography variant='h5'>{title.education}</Typography>
      <Box>

        <Typography variant='h4'>{school.medieinstitutet.title}</Typography>

        <Typography variant='h3'>{school.medieinstitutet.date}</Typography>
        <Typography variant='h2'>{school.medieinstitutet.subtitle}</Typography>

        <Typography variant='h1'>{school.medieinstitutet.courses.first.title}</Typography>
        <Typography variant='h2'>{school.medieinstitutet.courses.first.desc}</Typography>

        <Typography variant='h1'>{school.medieinstitutet.courses.second.title}</Typography>
        <Typography variant='h2'>{school.medieinstitutet.courses.second.desc}</Typography>

        <Typography variant='h1'>{school.medieinstitutet.courses.third.title}</Typography>
        <Typography variant='h2'>{school.medieinstitutet.courses.third.desc}</Typography>

        <Typography variant='h1'>{school.medieinstitutet.courses.fourth.title}</Typography>
        <Typography variant='h2'>{school.medieinstitutet.courses.fourth.desc}</Typography>
      </Box>
    </EducationContainer>
  );
};
