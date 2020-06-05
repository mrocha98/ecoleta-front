import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
