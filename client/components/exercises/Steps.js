import React, { Fragment } from 'react';
import { CreateButton, DeleteButton } from 'components/buttons';
import { Field } from 'components/forms';
import { required } from 'validations';
import _ from 'lodash';
import { generateWords } from 'regex';

import ExerciseStep from './Step';
import RegularExpressionField from './RegularExpressionField';

const newStep = steps => {
  const maxLimit = _.max(_.map(steps.getAll(), 'limit')) || 2;

  steps.push({
    limit: Number(maxLimit) + 1,
  });
};

class ExerciseSteps extends React.Component {
  state = {
    currentStep: 0,
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;
    const currentStep = fields.get(this.state.currentStep);
    const limit = +_.get(currentStep, 'limit');

    const toRegex = value => {
      try {
        if (value) {
          return new RegExp(`^(${value})$`, 'g');
        }

        return { test: () => false };
      } catch (err) {
        return { test: () => false };
      }
    };

    return (
      <fieldset className="form-group">
        <label>
          Etapas
        </label>
        <div className="card box-shadow">
          <div className="card-body">
            <CreateButton className="mb-2 mr-1" onClick={() => newStep(fields)} />
            <DeleteButton
              className="mb-2"
              onClick={() => {
                fields.remove(this.state.currentStep);

                if (this.state.currentStep === fields.getAll().length - 1) {
                  this.setState({
                    currentStep: Math.max(this.state.currentStep - 1, 0),
                  });
                }
              }}
            />
            <ul className="list-group-horizontal">
              {fields.map((step, index) => (
                <Field
                  key={index.toString()}
                  type="text"
                  name={step}
                  component={ExerciseStep}
                  number={index + 1}
                  onClick={() => this.setState({ currentStep: index })}
                  active={index === this.state.currentStep}
                />
              ))}
            </ul>
            <div className="card box-shadow mt-2">
              <div className="card-body">
                <div className="form-group">
                  <label>Quantidade de símbolos</label>
                  <Field
                    type="number"
                    name={`steps[${this.state.currentStep}].limit`}
                    className="form-control col-sm-1"
                    validate={required}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '0px' }}>
                  <label>Palavras</label>
                  <div className="card box-shadow">
                    <div className="card-body">
                      <p className="card-text">
                        <RegularExpressionField
                          name="regularExpression"
                          component={({ input: { value } }) => (
                            <span>
                              {generateWords(value, limit).map((words, i) => (
                                <span key={i.toString()}>
                                  {words.map(word => (
                                    toRegex(value).test(word) ? (
                                      <Fragment>
                                        <mark>{word || '∈'}</mark>
                                        {' '}
                                      </Fragment>) : `${word || '∈'} `
                                  ))}<br />
                                </span>
                              ))}
                            </span>
                          )}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
};

export default ExerciseSteps;
