import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

interface ReactRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const AppRoute: React.FC<ReactRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useSession();

  return (
    <>
      <Route
        {...rest}
        render={() => {
          return isPrivate === !!user ? (
            <Component />
          ) : (
            <>
              <Redirect
                to={{ pathname: isPrivate ? '/admin' : '/dashboard' }}
              />
            </>
          );
        }}
      />
    </>
  );
};
