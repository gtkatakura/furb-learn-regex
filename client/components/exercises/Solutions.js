import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withLifeCycle from 'util/withLifeCycle';
import _ from 'lodash';

import fetchAll from 'actions/professor/exercises/answers/fetchAll';

const toEntries = solutions => _.sortBy(
  _.entries(_.groupBy(solutions, 'value')),
  ([solution, array]) => array.length
).reverse();

const Solutions = ({ solutions: { valids, invalids } }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 p-3">
        <span>Válidas</span>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">Expressão regular</th>
              <th className="text-center" style={{ width: '120px' }}>Ocorrências</th>
            </tr>
          </thead>
          <tbody>
            {toEntries(valids).map(([solution, array]) => (
              <tr key={solution}>
                <td className="text-center">
                  {solution}
                </td>
                <td className="text-center">
                  {array.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-6 p-3">
        <span>Inválidas</span>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">Expressão regular</th>
              <th className="text-center" style={{ width: '120px' }}>Ocorrências</th>
            </tr>
          </thead>
          <tbody>
            {toEntries(invalids).map(([solution, array]) => (
              <tr key={solution}>
                <td className="text-center">
                  {solution}
                </td>
                <td className="text-center">
                  {array.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, { params: { exerciseId } }) => ({
  exerciseId,
  solutions: {
    valids: _.filter(_.flatMap(_.filter(state.answer.entities, ['exercise', exerciseId]), 'solutions'), 'valid'),
    invalids: _.reject(_.flatMap(_.filter(state.answer.entities, ['exercise', exerciseId]), 'solutions'), 'valid'),
  },
});

const mapDispatchToProps = dispatch => ({
  onMount: ({ exerciseId }) => exerciseId && fetchAll(exerciseId)(dispatch),
});

export default _.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle,
)(Solutions);
