import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import Home from './components/home';

import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';

ReactDom.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={Home}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
