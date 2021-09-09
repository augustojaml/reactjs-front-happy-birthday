import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/web/Home';
import { Form } from '../pages/web/Form';
import { Congratulations } from '../pages/web/Congratulations';
import { Dashboard } from '../pages/admin/Dashboard';
import { Login } from '../pages/admin/Login';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/form' component={Form} />
      <Route path='/congratulations' component={Congratulations} />

      <Route path='/admin' exact component={Login} />

      <Route path='/admin/dashboard' component={Dashboard} />
    </Switch>
  );
};
