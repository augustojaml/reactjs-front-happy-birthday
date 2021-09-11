import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import { useSession } from './useSession';

interface DashboardProps {
  children: ReactNode;
}

interface VoucherProps {
  id: number;
  name: string;
  date_of_birth: string;
  voucher: string;
}
interface DashDataProps {
  vouchers: VoucherProps[];
  total: number;
  facebook: number;
  google: number;
  instagram: number;
  site: number;
  others: number;
}

interface DashBoard {
  data: DashDataProps;
  isLoading: boolean;
}

const DashboardContent = createContext({} as DashBoard);

export function DashboardProvider({ children }: DashboardProps) {
  const [data, setData] = useState<DashDataProps>({} as DashDataProps);
  const [isLoading, setIsLoading] = useState(true);
  const { signOut } = useSession();

  useEffect(() => {
    api
      .get('v1/dashboard')
      .then((response) => {
        setData(response.data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(function (error) {
        if (error.response.data) {
          signOut();
        }
      });
  }, [signOut]);

  return (
    <>
      <DashboardContent.Provider value={{ data, isLoading }}>
        {children}
      </DashboardContent.Provider>
    </>
  );
}

export function useDashboard() {
  return useContext(DashboardContent);
}
