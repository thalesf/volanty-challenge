import React from 'react';
import Home from './pages/home';
import GlobalStyles from "./components/shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
