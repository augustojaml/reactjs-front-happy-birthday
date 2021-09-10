import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface ErrorsData {
  [key: string]: string;
}

interface UserProps {
  name: string;
  email: string;
  token: string;
}

interface Session {
  errors: ErrorsData;
  setErrors: (errors: ErrorsData) => void;
  sessionLogin: (email: string, password: string) => void;
  user?: UserProps;
}

interface SessionContextProps {
  children: ReactNode;
}

const SessionContext = createContext({} as Session);

export function SessionProvider({ children }: SessionContextProps) {
  const [errors, setErrors] = useState<ErrorsData>({});
  const [user, setUser] = useState<UserProps>();

  function sessionLogin(email: string, password: string) {
    api
      .post('v1/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        setUser({
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
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
  }

  return (
    <SessionContext.Provider
      value={{
        errors,
        setErrors,
        sessionLogin,
        user,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
