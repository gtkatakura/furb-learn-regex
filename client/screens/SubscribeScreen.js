import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withLifeCycle from 'util/withLifeCycle';

import { Button } from 'components/buttons';

import subscribe from 'actions/classRooms/subscribe';

const SubscribeScreen = ({ finished, classwork }) => (
  <div className="py-2 text-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {!finished && <h1>Aguarde um momento...</h1>}
          {finished && (
            <Fragment>
              <h4>Você acabou de inscrever-se em {classwork.name}</h4>
              <Button redirectTo="/minhas-atividades/em-andamento">
                Ir para Minhas Atividades
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, { params: { token } }) => ({
  token,
  finished: state.subscribe.finished,
  classwork: state.subscribe.payload,
});

const mapDispatchToProps = dispatch => ({
  onMount: ({ token }) => subscribe(token)(dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle,
)(SubscribeScreen);
