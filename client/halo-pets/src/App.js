import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisLogin from './pages/RegisLogin'
import Home from './pages/Home'
import HealthCarePage from './pages/HealthCare'
import Chat from './pages/Chat'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <RegisLogin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/healthcare">
          <HealthCarePage />
        </Route>
      </Switch>
    </>
  );
}




