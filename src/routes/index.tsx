import React from 'react';
import { Switch } from 'react-router-dom';

import { Home } from '../pages/web/Home';
import { Form } from '../pages/web/Form';
import { Congratulations } from '../pages/web/Congratulations';
import { Dashboard } from '../pages/admin/Dashboard';
import { Login } from '../pages/admin/Login';
import { AppRoute } from './Route';
import { DashboardProvider } from '../hooks/useDashboard';

export const Routes = () => {
  return (
    <Switch>
      <AppRoute path='/' exact component={Home} />
      <AppRoute path='/form' component={Form} />
      <AppRoute path='/congratulations' component={Congratulations} />

      <AppRoute path='/admin' exact component={Login} />
      <DashboardProvider>
        <AppRoute
          path='/admin/dashboard'
          isPrivate={true}
          component={Dashboard}
        />
      </DashboardProvider>
    </Switch>
  );
};
