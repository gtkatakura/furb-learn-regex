import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import classNames from 'classnames';
import { Collapse } from 'reactstrap';
import _ from 'lodash';
import moment from 'moment';
import withLifeCycle from 'util/withLifeCycle';

import getCurrentClassRoom from 'selectors/getCurrentClassRoom';
import fetchAllAnswers from 'actions/answers/fetchAll';
import fetchAllStudents from 'actions/student/fetchAll';

class ClassworkAnswers extends React.Component {
  state = { collapse: false };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { classwork, answers, students } = this.props;

    const getAnswersByStudent = (answers, student) => _.filter(answers, ['student._id', student._id]);

    const getCompleteds = (answers, student) => _.filter(getAnswersByStudent(answers, student), 'valid').length;
    const getInProgress = (answers, student) => getAnswersByStudent(answers, student).length - getCompleteds(answers, student);

    const getOnHold = (answers, student) => classwork.activity.exercises.length - getAnswersByStudent(answers, student).length;

    const allExercisesCompleted = student => (
      getCompleteds(answers, student) === classwork.activity.exercises.length
    );

    const countStudentsCompletedActivity = _.filter(
      _.map(students, 'user'),
      student => getCompleteds(answers, student) === classwork.activity.exercises.length,
    ).length;

    return (
      <div className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 order-md-2">
              <h4 className="d-flex justify-content-between mb-3 margin-button-0">
                <span className="text-muted">
                  <a onClick={this.toggle} style={{ cursor: 'pointer' }}>
                    {classwork.activity.name} - {moment(classwork.deadline).isSameOrAfter(moment(), 'day') ? 'Prazo' : 'Encerrado em'}
                    {' '}{moment(classwork.deadline).format('L')}
                  </a>
                </span>
                <span className="badge badge-secondary badge-pill">
                  {countStudentsCompletedActivity}/{students.length}
                </span>
              </h4>
              <Collapse isOpen={this.state.collapse} >
                <ul className="list-group" style={{ marginTop: '24px' }}>
                  {students.map(student => (
                    <Link
                      className={classNames("list-group-item list-group-item-action d-flex justify-content-between", {
                      })}
                    >
                      <div
                        className={classNames({
                          'text-success': allExercisesCompleted(student.user),
                          'text-danger': false,
                        })}
                      >
                        <h6 className="my-0">
                          {_.get(student, 'user.name')}
                        </h6>
                        <small>
                          {getCompleteds(answers, student.user)} concluídos, {getInProgress(answers, student.user)} em andamento,
                          {' '}{getOnHold(answers, student.user)} não iniciado
                        </small>
                      </div>
                      <span className="text-muted">
                      {getCompleteds(answers, student.user)}/{classwork.activity.exercises.length}
                      </span>
                    </Link>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const getAnswer = (classwork, answers) =>
  answers.filter(answer => _.map(classwork.activity.exercises, '_id').includes(answer.exercise));

const getStudentsByClassWork = (classwork, students) => (
  students.filter(student => _.map(_.flatMap(student.classRooms, 'classworks'), '_id').includes(classwork._id))
);

const ClassworksAnswers = ({ classworks, students, answers }) => (
  _.orderBy(classworks, 'deadline', 'desc').map(classwork => (
    <ClassworkAnswers
      classwork={classwork}
      answers={getAnswer(classwork, answers)}
      students={getStudentsByClassWork(classwork, students)}
    />
  ))
);

const getAnswers = state => _.get(state, 'answer.entities');
const getStudents = state => _.get(state, 'student.entities');

const mapStateToProps = (...args) => ({
  classRoom: getCurrentClassRoom(...args),
  classworks: (_.get(getCurrentClassRoom(...args), 'classworks') || []),
  answers: getAnswers(...args) || [],
  students: getStudents(...args) || [],
});

const mapDispatchToProps = dispatch => ({
  onMount: async ({ classRoom }) => {
    if (classRoom) {
      await Promise.all([
        fetchAllAnswers(classRoom._id)(dispatch),
        fetchAllStudents()(dispatch),
      ]);
    }
  },
});

export default _.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle,
)(ClassworksAnswers);
