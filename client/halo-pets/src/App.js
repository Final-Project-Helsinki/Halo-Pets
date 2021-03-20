import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisLogin from './pages/RegisLogin'
import Home from './pages/Home'
import HealthCarePage from './pages/HealthCare'
import Chat from './pages/Chat'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import getIsLoggedIn from './helpers/getIsLoggedIn'

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/');
  } else {
    // next();
    next.redirect('/home');
  }
};
export default function App() {
  return (
    <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
      <Switch>
        <GuardedRoute path="/" exact component={RegisLogin} />
        <GuardedRoute path="/home" exact component={Home} meta={{ auth: true }} />
        <GuardedRoute path="/chat" exact component={Chat} meta={{ auth: true }} />
        <GuardedRoute path="/healthcare" exact component={HealthCarePage} meta={{ auth: true }} />
        <GuardedRoute path="*" component={NotFound} />
      </Switch>
    </GuardProvider>
  );
}




