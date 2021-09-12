import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { api } from '../services/api';

interface ErrorsData {
  [key: string]: string;
}

interface SessionCredentials {
  user: object;
  token: string;
}

interface Session {
  errors: ErrorsData;
  setErrors: (errors: ErrorsData) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  user: object;
}

interface SessionContextProps {
  children: ReactNode;
}

const SessionContext = createContext({} as Session);

export function SessionProvider({ children }: SessionContextProps) {
  const [errors, setErrors] = useState<ErrorsData>({});
  const [session, setSession] = useState<SessionCredentials>(() => {
    const token = localStorage.getItem('@Birthday:token');
    const user = localStorage.getItem('@Birthday:user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token: token, user: JSON.parse(user) };
    }
    return {} as SessionCredentials;
  });

  const signIn = useCallback(async (email: string, password: string) => {
    api
      .post('v1/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        localStorage.setItem('@Birthday:token', token);
        localStorage.setItem('@Birthday:user', JSON.stringify(user));
        setSession({
          user: user,
          token: token,
        });
        setErrors({});
      })
      .catch(function (error) {
        if (!error.response) {
          return;
        }

        let err: ErrorsData = {};

        Object.keys(error.response.data.errors).forEach(function (key) {
          err[key] = error.response.data.errors[key][0];
        });

        setErrors(err);
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Birthday:token');
    localStorage.removeItem('@Birthday:user');
    setSession({} as SessionCredentials);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        errors,
        setErrors,
        signIn,
        signOut,
        user: session.user,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
