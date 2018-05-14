import React from 'react';
import classNames from 'classnames';
import Link from 'components/Link';
import moment from 'moment';
import _ from 'lodash';

const hasValidSolution = exercise => _.some(_.get(exercise, 'answer.solutions'), 'valid');

const ClassworkItem = ({ classwork }) => (
  <div className="py-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 order-md-2">
          <h4 className="d-flex justify-content-between mb-3">
            <span className="text-muted">
              {classwork.activity.name} - {moment(classwork.deadline).isSameOrAfter(moment(), 'day') ? 'Prazo' : 'Encerrado em'}
              {' '}{moment(classwork.deadline).format('L')}
            </span>
            <span className="badge badge-secondary badge-pill">
              {_.filter(classwork.activity.exercises, hasValidSolution).length} / {classwork.activity.exercises.length}
            </span>
          </h4>
          <ul className="list-group">
            {classwork.activity.exercises.map(exercise => (
              <Link
                className={classNames("list-group-item list-group-item-action d-flex justify-content-between", {
                  "bg-light": hasValidSolution(exercise),
                })}
                to={`/minhas-atividades/em-andamento/${exercise._id}`}
                disabled={!moment(classwork.deadline).isSameOrAfter(moment(), 'day')}
              >
                <div
                  className={classNames({
                    'text-success': exercise.answer && hasValidSolution(exercise),
                    'text-danger': exercise.answer && !hasValidSolution(exercise),
                  })}
                >
                  <h6 className="my-0">
                    {exercise.description}
                  </h6>
                  {_.some(_.get(exercise, 'answer.solutions')) && (<small>{_.last(exercise.answer.solutions).value}</small>)}
                </div>
                {exercise.answer && (
                  <span className="text-muted">
                    {exercise.answer.solutions.length} tentativas
                  </span>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ClassworkItem;
