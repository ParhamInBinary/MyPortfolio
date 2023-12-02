import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { JohnBauerComponent, MedieinstitutetComponent } from './components';
import { EducationContainer } from './styles';

export const EducationComponent = () => {
  const { title } = resumeStrings;

  return (
    <EducationContainer>
      <Typography variant="h5">{title.education}</Typography>
      <Box>
        <MedieinstitutetComponent />
        <JohnBauerComponent />
      </Box>
    </EducationContainer>
  );
};
