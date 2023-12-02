import { Box, Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';

import { ResumeCategoryContainer } from '../styles';
import { JohnBauerComponent, MedieinstitutetComponent } from './components';
import { ThreeHexagons } from '../../../hexagons';

export const EducationComponent = () => {
  const { title } = resumeStrings;

  return (
    <ResumeCategoryContainer>
      <Typography variant="h5">{title.education}</Typography>
      <Box>
        <MedieinstitutetComponent />
        <ThreeHexagons />
        <JohnBauerComponent />
      </Box>
    </ResumeCategoryContainer>
  );
};
