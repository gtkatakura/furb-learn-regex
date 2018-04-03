import React from 'react';

import ExercisesScreen from './ExercisesScreen';
import TabList from '../../../containers/TabList';
import TabLink from '../../../containers/TabLink';

const ProfessorDashboardScreen = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <TabList>
          <TabLink to="/professor/turmas" component={() => <span>turmas</span>}>
            Turmas
          </TabLink>
          <TabLink to="/professor/atividades" component={() => <span>atividades</span>}>
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
