import React from 'react';
import { Router, Route } from 'react-router';

import Root from './Root';
import NotFound from '../components/NotFound';
import history from '../history';

const AppContainer = () => (
  <Router history={history}>
    <Route path="/" component={Root} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default AppContainer;
