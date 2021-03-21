import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisLogin from './pages/RegisLogin'
import Home from './pages/Home'
import HealthCarePage from './pages/HealthCare'
import Chat from './pages/Chat'
import Loading from './components/Loading'
import ErrorNotFound from './components/NotFound'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import getIsLoggedIn from './helpers/getIsLoggedIn'
import AdoptionPage from './pages/Adoption';
import Midtrans from './pages/Midtrans'

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/');
  } else {
    if (getIsLoggedIn()) {
      next.redirect('/home');
    }
    next();
  }
};
export default function App() {
  return (
    <GuardProvider guards={[requireLogin]} loading={Loading} error={ErrorNotFound}>
      <Switch>
        <GuardedRoute path="/" exact component={RegisLogin} />
        <GuardedRoute path="/home" exact component={Home} meta={{ auth: true }} />
        <GuardedRoute path="/chat" exact component={Chat} meta={{ auth: true }} />
        <GuardedRoute path="/healthcare" exact component={HealthCarePage} meta={{ auth: true }} />
        <GuardedRoute path="/adoption" exact component={AdoptionPage} meta={{ auth: true }} />
        <Route exact path="/midtrans">
          <Midtrans></Midtrans>
        </Route>
        <GuardedRoute path="*" component={ErrorNotFound} />
      </Switch>
    </GuardProvider>
  );
}




