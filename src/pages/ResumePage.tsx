import {
  EducationComponent,
  QualificationsComponent,
  ResumeCategoryContainer,
  WorkExpComponent,
} from '../components';
import { OpacityBG, ResumeContainer } from './styles';

export const ResumePage = () => {
  return (
    <>
      <OpacityBG />
      <ResumeContainer>
        <EducationComponent />
        <ResumeCategoryContainer>
          <WorkExpComponent />
          <QualificationsComponent />
        </ResumeCategoryContainer>
      </ResumeContainer>
    </>
  );
};
