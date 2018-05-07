import React from 'react';
import classNames from 'classnames';
import Link from 'components/Link';
import moment from 'moment';
import _ from 'lodash';

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
              {_.filter(classwork.activity.exercises, 'answer.valid').length} / {classwork.activity.exercises.length}
            </span>
          </h4>
          <ul className="list-group">
            {classwork.activity.exercises.map(exercise => (
              <Link
                className={classNames("list-group-item list-group-item-action d-flex justify-content-between", {
                  "bg-light": exercise.answer && exercise.answer.valid,
                })}
                to={`/minhas-atividades/em-andamento/${exercise._id}`}
                disabled={!moment(classwork.deadline).isSameOrAfter(moment(), 'day')}
              >
                <div
                  className={classNames({
                    'text-success': exercise.answer && exercise.answer.valid,
                    'text-danger': exercise.answer && !exercise.answer.valid,
                  })}
                >
                  <h6 className="my-0">
                    {exercise.description}
                  </h6>
                  {_.get(exercise, 'answer.valid') && <small>{_.last(exercise.answer.response)}</small>}
                </div>
                {exercise.answer && (
                  <span className="text-muted">
                    {exercise.answer.response.length} tentativas
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
