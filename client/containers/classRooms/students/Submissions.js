import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import Submissions from 'components/classRooms/students/Submissions';
import getCurrentClassRoom from 'selectors/getCurrentClassRoom';

const getStatus = solution => {
  if (!solution) {
    return 'Não iniciado';
  }

  if (!solution.valid) {
    return 'Em andamento';
  }

  return 'Concluída';
};

const getLastSolution = solution => {
  if (!solution) {
    return '';
  }

  return solution.value;
};

const getSubmissions = (state, { params }) => {
  const student = _.find(state.student.entities, ['_id', params.studentId]);
  const classwork = _.find(getCurrentClassRoom(state, { params }).classworks, ['_id', params.classworkId]);
  const answers = _.filter(state.answer.entities, ['student._id', student.user._id]);

  return classwork.activity.exercises.map(exercise => {
    const answer = _.find(answers, ['exercise', exercise._id]);
    const solution = _.last(_.get(answer, 'solutions'));

    return {
      exercise,
      lastSolution: getLastSolution(solution),
      status: getStatus(solution),
    };
  });
};

const mapStateToProps = (...args) => ({
  resources: getSubmissions(...args),
  isLoading: false,
});

export default _.compose(
  withRouter,
  connect(mapStateToProps, null),
)(Submissions);
