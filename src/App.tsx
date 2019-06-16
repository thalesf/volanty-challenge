import React from 'react';
import Home from './pages/home';
import Container from './style';
import GlobalStyles from "./components/shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Home />
    </Container>
  );
}

export default App;
