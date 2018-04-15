import React from 'react';
import { FieldArray } from 'redux-form';
import { TextField } from 'components/forms';
import { DeleteButton } from 'components/buttons';
import ExerciseTable from 'components/exercises/ExerciseTable';
import ExercisesListModal from 'containers/exercises/ExercisesListModal';
import { required } from 'validations';
import _ from 'lodash';

class ExercisesFieldset extends React.Component {
  constructor() {
    super();

    this.state = {
      selecteds: [],
    };

    this.onSelecteds = this.onSelecteds.bind(this);
  }

  onSelecteds(selecteds) {
    this.setState({ selecteds });
  }

  onDelete() {
    const exercises = this.props.fields.getAll();

    _.reverse(this.state.selecteds).forEach(exercise => {
      const index = exercises.indexOf(exercise);

      if (index !== -1) {
        this.props.fields.remove(index);
      }
    });

    this.setState({
      selecteds: [],
    });
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;

    const exceptions = _.map(fields.getAll(), '_id');

    return (
      <fieldset className="form-group">
        <label>
          Exercícios
        </label>
        <div className="card box-shadow">
          <div className="card-body">
            <div className="col-md-12 p-3">
              <ExercisesListModal
                exceptions={exceptions}
                onSave={exercises => exercises.forEach(e => fields.push(e))}
              />
              <DeleteButton disabled={this.state.selecteds.length === 0} onClick={() => this.onDelete()} />
              <ExerciseTable withCreatedAt={false} onSelecteds={this.onSelecteds} resources={fields.getAll() || []} />
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

const ActivityForm = ({ onSubmit, submitting }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <form onSubmit={onSubmit}>
          <TextField
            name="name"
            label="Nome"
            validate={required}
          />
          <FieldArray name="exercises" component={ExercisesFieldset} />
          <div className="float-right">
            <button type="submit" className="btn btn-primary" disabled={submitting}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ActivityForm;
