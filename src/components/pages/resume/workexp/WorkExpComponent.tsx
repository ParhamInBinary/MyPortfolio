import { Typography } from '@mui/material';

import { resumeStrings } from '../../../../assets/strings';
import { ResumeCategoryContainer } from '../styles';
import { LunaComponent } from './components';

export const WorkExpComponent = () => {
  const { workExp } = resumeStrings.title;
  return (
    <ResumeCategoryContainer>
      <Typography variant="h5">{workExp}</Typography>
      <LunaComponent />
    </ResumeCategoryContainer>
  );
};
