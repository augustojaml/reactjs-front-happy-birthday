// import styled from 'styled-components';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
