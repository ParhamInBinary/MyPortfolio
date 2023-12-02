import { Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { ResumeCategoryContainer } from '../styles';
import { LunaComponent } from './components';

export const WorkExpComponent = () => {
  const { title, school, workExp, qualifications } = resumeStrings;
  return (
    <ResumeCategoryContainer>
      <Typography variant="h5">{title.workExp}</Typography>
      <LunaComponent />
    </ResumeCategoryContainer>
  );
};
