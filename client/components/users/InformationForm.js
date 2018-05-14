import React, { Fragment } from 'react';
import { Form, Field, TextField } from 'components/forms';
import { SaveButton } from 'components/buttons';

const UserInformationForm = ({ submitting, ...props }) => (
  <Fragment>
    <div className="py-2 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Minhas Informações</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 p-3">
          <Form {...props}>
            <SaveButton type="submit" className="mb-2" disabled={submitting} />
            <TextField
              name="name"
              label="Nome"
            />
            <Field
              name="email"
              label="Email"
              type="email"
            />
          </Form>
        </div>
      </div>
    </div>
  </Fragment>
);

export default UserInformationForm;
