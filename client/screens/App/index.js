import React from 'react';
import { Router, Route } from 'react-router';

import Root from './Root';
import ProfessorScreen from '../ProfessorScreen';
import ProfessorDashboardScreen from '../ProfessorScreen/DashboardScreen';
import ExerciseScreen from '../ProfessorScreen/ExerciseScreen';
import NotFound from '../../components/NotFound';
import history from '../../history';

import './theme.css';
import './custom.css';

const AppContainer = () => (
  <Router history={history}>
    <Route path="/" component={Root}>
      <Route path="professor" component={ProfessorScreen}>
        <Route path=":section" component={ProfessorDashboardScreen} />
        <Route path="exercicios/criar" component={ExerciseScreen} />
        <Route path="exercicios/:description" component={ExerciseScreen} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default AppContainer;
