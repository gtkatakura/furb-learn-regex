import React from 'react';
import _ from 'lodash';
import { FieldArray } from 'redux-form';
import { Form, TextField, SpanField } from 'components/forms';
import { DeleteButton } from 'components/buttons';
import ClassworkModal from 'components/classworks/ClassworkModal';
import ClassworkTable from 'components/classworks/ClassworkTable';
import { required } from 'validations';

class ClassworksFieldset extends React.Component {
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
    const entities = this.props.fields.getAll();

    _.reverse(this.state.selecteds).forEach(entity => {
      const index = entities.indexOf(entity);

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

    return (
      <fieldset className="form-group">
        <label>
          Tarefas
        </label>
        <div className="card box-shadow">
          <div className="card-body">
            <div className="col-md-12 p-3">
              <ClassworkModal onSave={values => fields.push(values)} />
              <DeleteButton disabled={this.state.selecteds.length === 0} onClick={() => this.onDelete()} />
              <ClassworkTable onSelecteds={this.onSelecteds} resources={fields.getAll() || []} />
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
          />
          <button type="submit" className="btn btn-primary float-right" disabled={submitting}>Salvar</button>
        </Form>
      </div>
    </div>
  </div>
);

export default ClassRoomForm;
