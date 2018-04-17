import React from 'react';
import { FieldArray } from 'redux-form';
import { Form, TextField } from 'components/forms';
import { DeleteButton } from 'components/buttons';
import ExerciseTable from 'components/exercises/ExerciseTable';
import ExercisesListModal from 'containers/exercises/ExercisesListModal';
import { required } from 'validations';
import _ from 'lodash';

class ExercisesFieldset extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(resource, index) {
    this.props.fields.remove(index);
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
              <ExerciseTable onDestroy={this.onDelete} withCreatedAt={false} resources={fields.getAll() || []} />
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

const ActivityForm = ({ submitting, ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <Form {...props}>
          <TextField
            name="name"
            label="Nome"
            validate={required}
          />
          <FieldArray name="exercises" component={ExercisesFieldset} />
          <div className="float-right">
            <button type="submit" className="btn btn-primary" disabled={submitting}>Salvar</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default ActivityForm;
