import React from 'react';

import ActivitiesScreen from './ActivitiesScreen';
import ExercisesScreen from './ExercisesScreen';
import InDevelopmentScreen from '../../InDevelopmentScreen';
import TabList from '../../../containers/TabList';
import TabLink from '../../../containers/TabLink';

const ProfessorDashboardScreen = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <TabList>
          <TabLink to="/professor/turmas" component={InDevelopmentScreen}>
            Turmas
          </TabLink>
          <TabLink to="/professor/atividades" component={ActivitiesScreen}>
            Atividades
          </TabLink>
          <TabLink to="/professor/exercicios" component={ExercisesScreen}>
            Exercícios
          </TabLink>
        </TabList>
      </div>
    </div>
  </div>
);

export default ProfessorDashboardScreen;
