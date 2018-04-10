import React from 'react';
import { FieldArray } from 'redux-form';
import moment from 'moment';
import _ from 'lodash';

import { TextField } from '../components/forms';
import { required } from '../validations';
import ExercisesListModal from '../containers/ExercisesListModal';

class ExerciseSelector extends React.Component {
  constructor() {
    super();

    this.state = {
      checkeds: [],
    };
  }

  onCheckboxChange(event, exercise) {
    if (event.target.checked) {
      this.setState({
        checkeds: _.uniq([
          ...this.state.checkeds,
          exercise,
        ]),
      });
    } else {
      this.setState({
        checkeds: _.remove(this.state.checkeds, _.eq(exercise)),
      });
    }
  }

  onDelete() {
    for (let checked of this.state.checkeds) {
      this.props.fields.remove(checked);
    }

    this.setState({
      checkeds: [],
    });
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;
    return (
      <fieldset className="form-group">
        <label>
          Exercícios
        </label>
        <div className="card box-shadow">
          <div className="card-body">
            <div className="col-md-12 p-3">
              {/* <button type="button" className="btn btn-primary mb-2 mr-1">Adicionar</button> */}
              <ExercisesListModal onSave={exercises => exercises.forEach(e => fields.push(e))} />
              <button type="button" className="btn btn-danger mb-2" disabled={this.state.checkeds.length === 0} onClick={() => this.onDelete()}>
                Excluir
              </button>
              <table className="table table-hover table-striped table-bordered">
                <thead className="thead-inverse">
                  <tr>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Expressão Regular</th>
                    <th scope="col">Criado</th>
                  </tr>
                </thead>
                <tbody>
                  {(fields.getAll() || []).map((exercise, key) => (
                    <tr key={exercise._id}>
                      <td className="text-center">
                        <input type="checkbox" value="on" onChange={event => this.onCheckboxChange(event, key)} />
                      </td>
                      <td scope="row">{exercise.description}</td>
                      <td style={{ width: "30%" }}>{exercise.regularExpression}</td>
                      <td style={{ width: "15%" }}>{moment(exercise.createdAt).fromNow()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

const ActivityForm = ({ onSubmit, onDestroyClick, submitting, initialValues }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <form onSubmit={onSubmit}>
          <TextField
            name="name"
            label="Nome"
            validate={required}
          />
          <FieldArray name="exercises" component={ExerciseSelector} />
          <div className="float-right">
            {initialValues._id && <button type="button" className="btn btn-danger mr-1" onClick={() => onDestroyClick(initialValues)}>Excluir</button>}
            <button type="submit" className="btn btn-primary" disabled={submitting}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ActivityForm;
