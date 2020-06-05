import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CreatePoint from './pages/createPoint';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-point" component={CreatePoint} />
    </Switch>
  );
};

export default Routes;
