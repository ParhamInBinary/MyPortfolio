import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../../assets/strings';
import { ICourse } from './types';

export const MedieinstitutetComponent = () => {
  const { title, date, subtitle } = resumeStrings.school.medieinstitutet;
  const { first, second, third, fourth } =
    resumeStrings.school.medieinstitutet.courses;

  const coursesArray: ICourse[] = [first, second, third, fourth];

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="h3">{date}</Typography>
          <Typography variant="h2">{subtitle}</Typography>
        </Box>

        {coursesArray.map((course: ICourse, index: number) => (
          <Box key={index}>
            <Typography variant="h1" sx={{ display: 'flex', flex: 1 }}>
              {course.title}
            </Typography>
            <Typography variant="h2">{course.desc}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
