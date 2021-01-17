import React from 'react';

import CompanySubscription from '../pages/CompanySubscription';
import CoursePage from '../pages/CoursePage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserSubscription from '../pages/UserSubscription';
import Jobs from '../pages/Jobs';
import Partner from '../pages/Partner';
import User from '../pages/User';

import { BrowserRouter, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/cadastrar-parceiro" component={CompanySubscription} exact />
      <Route path="/curso" component={CoursePage} />
      <Route path="/entrar" component={Login} />
      <Route path="/cadastrar-usuario" component={UserSubscription} exact />
      <Route path="/parceiro" component={Partner} />
      <Route path="/usuario" component={User} />
      <Route path="/vagas" component={Jobs} />
    </BrowserRouter>
  );
}

export default Routes;
