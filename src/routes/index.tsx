import { Switch } from 'react-router-dom';
import { DashboardProvider } from '../hooks/useDashboard';
import { SessionProvider } from '../hooks/useSession';
import { Dashboard } from '../pages/admin/Dashboard';

import { Login } from '../pages/admin/Login';
import { Congratulations } from '../pages/web/Congratulations';
import { Form } from '../pages/web/Form';
import { Home } from '../pages/web/Home';
import { AppRoute } from './Route';

export const Routes = () => {
  return (
    <Switch>
      <AppRoute path='/' exact component={Home} />
      <AppRoute path='/congratulations' component={Congratulations} />
      <AppRoute path='/form' component={Form} />

      <SessionProvider>
        <AppRoute path='/admin' component={Login} />
        <DashboardProvider>
          <AppRoute path='/dashboard' isPrivate={true} component={Dashboard} />
        </DashboardProvider>
      </SessionProvider>
    </Switch>
  );
};
