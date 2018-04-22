import React from 'react';
import { FieldArray } from 'redux-form';
import { Form, TextField } from 'components/forms';
import { SaveButton } from 'components/buttons';
import ExerciseTable from 'components/exercises/ExerciseTable';
import ExercisesListModal from 'containers/exercises/ExercisesListModal';
import { required } from 'validations';
import _ from 'lodash';
import confirm from 'util/confirm';

class ExercisesFieldset extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  async onDelete(resource, index) {
    if (await confirm('Tem certeza que deseja excluir?')) {
      this.props.fields.remove(index);
    }
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
          <SaveButton type="submit" className="mb-2" disabled={submitting} />
          <TextField
            name="name"
            label="Descrição"
            validate={required}
          />
          <FieldArray name="exercises" component={ExercisesFieldset} />
        </Form>
      </div>
    </div>
  </div>
);

export default ActivityForm;
