import { Box } from '@mui/material';

import {
  EducationComponent,
  QualificationsComponent,
  WorkExpComponent,
} from '../components';
import { OpacityBG, ResumeContainer } from './styles';

export const ResumePage = () => {
  return (
    <>
      <OpacityBG />
      <ResumeContainer>
        <EducationComponent />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <WorkExpComponent />
          <QualificationsComponent />
        </Box>
      </ResumeContainer>
    </>
  );
};
