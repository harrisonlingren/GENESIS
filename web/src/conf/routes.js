import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../app/App';
import Home from '../home/Home';
import { Provider } from 'react-redux';
import store, { history } from '../store';


const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
);

export default routes;

