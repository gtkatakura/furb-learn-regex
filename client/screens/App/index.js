import React from 'react';
import { Router, Route } from 'react-router';

import ProfessorScreen from 'screens/ProfessorScreen';
import ProfessorDashboardScreen from 'screens/ProfessorScreen/DashboardScreen';
import ActivityScreen from 'screens/ProfessorScreen/ActivityScreen';
import ExerciseScreen from 'screens/ProfessorScreen/ExerciseScreen';
import InDevelopmentScreen from 'screens/InDevelopmentScreen';
import NotFound from 'components/NotFound';
import history from '../../history';

import Root from './Root';

import './theme.css';
import './custom.css';

const AppContainer = () => (
  <Router history={history}>
    <Route path="/" component={Root}>
      <Route path="professor" component={ProfessorScreen}>
        <Route path=":section" component={ProfessorDashboardScreen} />
        <Route path="atividades/criar" component={ActivityScreen} />
        <Route path="atividades/:name" component={ActivityScreen} />
        <Route path="exercicios/criar" component={ExerciseScreen} />
        <Route path="exercicios/:description" component={ExerciseScreen} />
      </Route>
      <Route path="minhas-atividades" component={InDevelopmentScreen} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default AppContainer;
