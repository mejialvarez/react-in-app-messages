import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/page1" component={App}/>
      <Route path="/page2" component={App}/>
    </Switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);