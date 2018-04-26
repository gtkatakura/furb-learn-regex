import React from 'react';
import { PrimaryButton } from 'components/buttons';
import withLifeCycle from 'util/withLifeCycle';

import Loading from 'components/Loading';

const ResolutionForm = ({ currentStep }) => (
  !currentStep
    ? <Loading />
    : (
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-3">
            <form className="">
              <PrimaryButton className="mb-2">
                Enviar Solução
              </PrimaryButton>
              <div className="form-group">
                <label>Expressão Regular</label>
                <input type="text" className="form-control" placeholder="descreva sua expressão regular aqui" />
              </div>
              <div className="form-group">
                <legend>Entradas</legend>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Válidas</label>
                    <div className="card box-shadow">
                      <div className="card-body">
                        <p className="card-text">
                          {currentStep.words.valids.map(words => (
                            <React.Fragment>
                              <span>{words}</span>
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Inválidas</label>
                    <div className="card box-shadow">
                      <div className="card-body">
                        <p className="card-text">
                          {currentStep.words.invalids.map(words => (
                            <React.Fragment>
                              <span>{words}</span>
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
);

export default withLifeCycle(ResolutionForm);
