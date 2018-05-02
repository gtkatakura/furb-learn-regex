import React from 'react';

import TabList from 'containers/TabList';
import TabLink from 'containers/TabLink';

import InProgressList from 'containers/classworks/InProgressList';
import CompletedList from 'containers/classworks/CompletedList';

const StudentDashboardScreen = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <TabList>
          <TabLink to="/minhas-atividades/em-andamento" component={InProgressList}>
            Em andamento
          </TabLink>
          <TabLink to="/minhas-atividades/concluidas" component={CompletedList}>
            Concluídas
          </TabLink>
        </TabList>
      </div>
    </div>
  </div>
);

export default StudentDashboardScreen;
