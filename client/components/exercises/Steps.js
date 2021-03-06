import React, { Fragment } from 'react';
import { CreateButton, DeleteButton } from 'components/buttons';
import { Field } from 'components/forms';
import { required, number } from 'validations';
import _ from 'lodash';
import wordsExtractFrom from 'regex/words/extractFrom/withSafeMode';
import warning from 'util/warning';

import ExerciseStep from './Step';
import RegularExpressionField from './RegularExpressionField';

const newStep = steps => {
  const maxLimit = _.max(_.map(steps.getAll(), 'limit')) || 2;
  const limit = Number(maxLimit) + 1;

  if (limit >= wordsExtractFrom.LIMIT.MAX) {
    warning(`Não foi possível criar uma nova etapa. A próxima etapa seria gerada com quantidade de símbolos igual a ${wordsExtractFrom.LIMIT.MAX}, ultrapassando o limite permitido.`);
  } else {
    steps.push({
      limit,
    });
  }
};

const generateWordsLimit = number.lessThanOrEqual(wordsExtractFrom.LIMIT.MAX);

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
                    validate={[required, generateWordsLimit]}
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
                              {wordsExtractFrom(value, limit).map((words, i) => (
                                <span key={i.toString()}>
                                  {words.map(word => (
                                    <Fragment key={word}>
                                      {toRegex(value).test(word)
                                        ? <mark>{word || '∈'}</mark>
                                        : (word || '∈')}
                                      {' '}
                                    </Fragment>
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
