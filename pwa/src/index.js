import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './component/Register';
import Home from './component/Home/Index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/Register" component={Register} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
