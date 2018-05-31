import React from 'react';
import { PrimaryButton } from 'components/buttons';
import { Form, TextField, Field } from 'components/forms';
import withLifeCycle from 'util/withLifeCycle';

import solutionIsValid from 'validations/solutionIsValid';
import { regex as regexIsValid } from 'validations';
import { toRegex } from 'regex';

const Word = ({ word, regex }) => (
  toRegex(regex).test(word)
    ? (
      <React.Fragment>
        <mark>{word || '∈'}</mark>
        {' '}
      </React.Fragment>
    ) : `${word || '∈'} `
);

const WordsWithMark = ({ words: manyWords, regex }) => (
  manyWords.map((words, i) => (
    <React.Fragment key={i.toString()}>
      <span>
        {words.map(word => <Word word={word} regex={regex} />)}
      </span>
      <br />
    </React.Fragment>
  ))
);

const ResolutionForm = ({ currentStep, onSubmit, submitting }) => (
  !currentStep
    ? (
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
            <span>Carregando...</span>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
            <Form onSubmit={onSubmit}>
              <PrimaryButton type="submit" className="mb-2" disabled={submitting}>
                Enviar Solução
              </PrimaryButton>
              <TextField
                name="regularExpression"
                label="Expressão Regular"
                placeholder="descreva sua expressão regular aqui"
                validate={[regexIsValid, solutionIsValid(currentStep)]}
              />
              <div className="form-group">
                <legend>Palavras</legend>
                <div className="row">
                  <div className="col-md-6 mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Válidas</label>
                    <div className="card box-shadow" style={{ flexGrow: 1 }}>
                      <div className="card-body">
                        <Field
                          name="regularExpression"
                          component={({ input: { value } }) => (
                            <p className="card-text">
                              <WordsWithMark
                                words={currentStep.words.valids}
                                regex={value}
                              />
                            </p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Inválidas</label>
                    <div className="card box-shadow" style={{ flexGrow: 1 }}>
                      <div className="card-body">
                        <Field
                          name="regularExpression"
                          component={({ input: { value } }) => (
                            <p className="card-text">
                              <WordsWithMark
                                words={currentStep.words.invalids}
                                regex={value}
                              />
                            </p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
);

export default withLifeCycle(ResolutionForm);
