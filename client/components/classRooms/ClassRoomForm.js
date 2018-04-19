import React from 'react';
import _ from 'lodash';
import { FieldArray } from 'redux-form';
import { Form, TextField, SpanField } from 'components/forms';
import { DeleteButton } from 'components/buttons';
import ClassworkModal from 'components/classworks/ClassworkModal';
import ClassworkTable from 'components/classworks/ClassworkTable';
import { required } from 'validations';

class ClassworksFieldset extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(resource, index) {
    this.props.fields.remove(index);
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;

    return (
      <fieldset className="form-group">
        <label>
          Tarefas
        </label>
        <div className="card box-shadow">
          <div className="card-body">
            <div className="col-md-12 p-3">
              <ClassworkModal onSave={values => fields.push(values)} />
              <ClassworkTable onDestroy={this.onDelete} resources={fields.getAll() || []} />
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

const ClassRoomForm = ({ submitting, ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <Form {...props}>
          <TextField
            name="name"
            label="Nome"
            validate={required}
          />
          <FieldArray name="classworks" component={ClassworksFieldset} />
          <SpanField
            name="token"
            label="Token de Acesso"
            className="col-md-4"
            copyToClipboard={token => `${window.location.origin}/turmas/inscrever-se/${token}`}
          />
          <button type="submit" className="btn btn-primary float-right" disabled={submitting}>Salvar</button>
        </Form>
      </div>
    </div>
  </div>
);

export default ClassRoomForm;
