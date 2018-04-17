import React, { Fragment } from 'react';
import { DeleteButton } from 'components/buttons';
import { Field } from 'components/forms';
import { required } from 'validations';
import _ from 'lodash';

import ExerciseStep from './ExerciseStep';

const newStep = steps => {
  const maxLimit = _.max(_.map(steps.getAll(), 'limit')) || 2;

  steps.push({
    limit: Number(maxLimit) + 1,
  });
};

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const generateValues = (text, limit = 3) => {
  const symbols = extractSymbols(text);
  const values = [symbols];

  while (values.length < limit) {
    const last = _.last(values);
    const newValues = _.flatMap(last, value => symbols.map(symbol => value + symbol));

    values.push(newValues);
  }

  return values.map(value => value.join(' '));
};

class ExerciseSteps extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 0,
    };
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
            <button type="button" className="btn btn-primary mb-2 mr-1" onClick={() => newStep(fields)}>Nova Etapa</button>
            <DeleteButton
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
                  <label>Limite de símbolos</label>
                  <Field
                    type="number"
                    name={`steps[${this.state.currentStep}].limit`}
                    className="form-control col-sm-1"
                    validate={required}
                  />
                </div>
                <div className="form-group">
                  <label>Valores</label>
                  <div className="card box-shadow">
                    <div className="card-body">
                      <p className="card-text">
                        <Field
                          name="regularExpression"
                          validate={required}
                          component={({ input: { value } }) => (
                            <span>
                              {generateValues(value, limit).map((values, i) => (
                                <span key={i.toString()}>
                                  {values.split(' ').map(generated => (
                                    toRegex(value).test(generated) ? (
                                      <Fragment>
                                        <mark>{generated}</mark>
                                        {' '}
                                      </Fragment>) : `${generated} `
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
