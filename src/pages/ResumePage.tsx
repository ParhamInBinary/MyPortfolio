import { Box } from '@mui/material';

import {
  EducationComponent,
  QualificationsComponent,
  WorkExpComponent,
} from '../components';
import { ResumeContainer } from './styles';

export const ResumePage = () => {
  return (
    <ResumeContainer>
      <EducationComponent />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <WorkExpComponent />
        <QualificationsComponent />
      </Box>
    </ResumeContainer>
  );
};
