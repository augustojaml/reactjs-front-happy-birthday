// import styled from 'styled-components';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { VoucherProvider } from './hooks/useVoucher';

export function App() {
  return (
    <BrowserRouter>
      <VoucherProvider>
        <Routes />
      </VoucherProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
