import { Outlet } from 'react-router-dom';

import { Header } from './components';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default App;
