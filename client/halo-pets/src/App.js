import React from 'react';
import RegisLogin from './pages/RegisLogin'
import Home from './pages/Home'
import { Switch, Link, Route } from 'react-router-dom'


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
      </Switch>
    </>
  );
}




