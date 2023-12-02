import { SloganContainerComponent, SubContainerComponent } from '../components';
import { HomeContainer } from './styles';

export const HomePage = () => {
  return (
    <HomeContainer>
      <SubContainerComponent />
      <SloganContainerComponent />
    </HomeContainer>
  );
};
