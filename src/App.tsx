import { useState } from 'react';

import { homeStrings } from './assets/strings';
import { Header } from './components';
import { Container } from './styles';

function App() {
  const [currentPage, setCurrentPage] = useState<string>(
    homeStrings.header.home
  );

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  );
}

export default App;
