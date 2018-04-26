import React from 'react';
import { Router, Route } from 'react-router';

import ProfessorScreen from 'screens/ProfessorScreen';
import ProfessorDashboardScreen from 'screens/ProfessorScreen/DashboardScreen';
import ActivityScreen from 'screens/ProfessorScreen/ActivityScreen';
import ClassRoomScreen from 'screens/ProfessorScreen/ClassRoomScreen';
import ExerciseScreen from 'screens/ProfessorScreen/ExerciseScreen';
import StudentScreen from 'screens/StudentScreen';
import StudentDashboardScreen from 'screens/StudentScreen/DashboardScreen';
import ResolutionForm from 'containers/classworks/ResolutionForm';
import SubscribeScreen from 'screens/SubscribeScreen';
import NotFound from 'components/NotFound';
import InDevelopmentScreen from 'screens/InDevelopmentScreen';
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
        <Route path="turmas/criar" component={ClassRoomScreen} />
        <Route path="turmas/:name" component={ClassRoomScreen} />
        <Route path="exercicios/criar" component={ExerciseScreen} />
        <Route path="exercicios/:description" component={ExerciseScreen} />
      </Route>
      <Route path="minhas-atividades" component={StudentScreen}>
        <Route path=":section" component={StudentDashboardScreen} />
        <Route path="em-andamento/:exerciseId" component={ResolutionForm} />
      </Route>
      <Route path="turmas/inscrever-se/:token" component={SubscribeScreen} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default AppContainer;
