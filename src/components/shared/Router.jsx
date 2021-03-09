import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Weather from '../pages/Weather';
import Home from '../pages/Home'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/weather" component={Weather}/>
    </Switch>
  );
};

export default Router;