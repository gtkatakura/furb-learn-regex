import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import Submissions from 'components/exercises/solutions/Submissions';

const getSubmissions = (state, { params }) => {
  const answers = _.filter(state.answer.entities, ['exercise', params.exerciseId]);
  const answersBySolution = _.filter(answers, answer => _.some(answer.solutions, ['value', params.solution]));

  const submissions = _.map(answersBySolution, answer => ({
    student: answer.student,
    ocorrences: _.filter(answer.solutions, ['value', params.solution]).length,
  }));

  return _.reverse(_.sortBy(submissions, 'ocorrences'));
};

const mapStateToProps = (...args) => ({
  resources: getSubmissions(...args),
  isLoading: false,
});

export default _.compose(
  withRouter,
  connect(mapStateToProps, null),
)(Submissions);
