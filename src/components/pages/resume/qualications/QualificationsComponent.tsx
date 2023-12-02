import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { ResumeCategoryContainer } from '../styles';

export const QualificationsComponent = () => {
  const { title, qualifications } = resumeStrings;
  return (
    <ResumeCategoryContainer>
      <Typography variant="h5">{title.qualifications}</Typography>
      <Box>
        
      </Box>
      <Typography variant="h2">{qualifications.desc}</Typography>
    </ResumeCategoryContainer>
  );
};
