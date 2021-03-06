import React from 'react';
import _ from 'lodash';
import { FieldArray } from 'redux-form';
import { Form, TextField, SpanField } from 'components/forms';
import { SaveButton } from 'components/buttons';
import ClassworkModal from 'components/classworks/Modal';
import ClassworkTable from 'components/classworks/Table';
import { required } from 'validations';
import confirm from 'util/confirm';

class ClassworksFieldset extends React.Component {
  onDelete = async (resource, index) => {
    if (await confirm('Tem certeza que deseja excluir?')) {
      this.props.fields.remove(index);
    }
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;

    return (
      <fieldset className="form-group">
        <label>
          Atividades
        </label>
        <div className="card box-shadow">
          <div className="card-body" style={{ paddingBottom: '0px' }}>
            <div className="col-md-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
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
      <div className="col-md-12 pt-2">
        <Form {...props}>
          <SaveButton type="submit" className="mb-2" disabled={submitting} />
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
        </Form>
      </div>
    </div>
  </div>
);

export default ClassRoomForm;
