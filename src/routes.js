import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Frete from './pages/ComFrete';
import { SemFrete } from './pages/SemFrete';



export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SemFrete} />
        <Route path="/frete" component={Frete} />
      </Switch>
    </BrowserRouter>
  );
}