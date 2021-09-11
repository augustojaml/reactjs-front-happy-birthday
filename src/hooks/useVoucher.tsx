import { createContext, ReactNode, useCallback, useContext } from 'react';
import { api } from '../services/api';

interface VoucherDOMProps {
  children: ReactNode;
}

interface voucherForm {
  name: string;
  email: string;
  whatsapp: string;
  date_of_birth: string;
  how_did_you_find_us: string;
}

interface VoucherContextProps {
  sendVoucher: ({
    name,
    email,
    whatsapp,
    date_of_birth,
    how_did_you_find_us,
  }: voucherForm) => void;
}

const VoucherContext = createContext({} as VoucherContextProps);

export function VoucherProvider({ children }: VoucherDOMProps) {
  const sendVoucher = useCallback(
    async ({
      name,
      email,
      whatsapp,
      date_of_birth,
      how_did_you_find_us,
    }: voucherForm) => {
      const response = await api.post('v1/vouchers', {
        name,
        email,
        whatsapp,
        date_of_birth,
        how_did_you_find_us,
      });
      console.log(response.data);
    },
    []
  );

  return (
    <VoucherContext.Provider value={{ sendVoucher }}>
      {children}
    </VoucherContext.Provider>
  );
}

export function useVoucher() {
  return useContext(VoucherContext);
}
