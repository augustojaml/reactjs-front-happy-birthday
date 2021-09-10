// import styled from 'styled-components';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './hooks/useSession';

export function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </SessionProvider>
  );
}
