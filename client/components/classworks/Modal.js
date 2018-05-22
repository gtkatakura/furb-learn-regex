import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, CheckboxField } from 'components/forms';
import { AddButton, CancelButton } from 'components/buttons';
import { required, date } from 'validations';
import ActivitySelect from 'containers/activities/Select';
import { fetchAll } from 'actions/professor/activities';

class ClassworkModal extends React.Component {
  state = {
    modal: false,
  }

  onSave = () => {
    this.props.handleSubmit(values => {
      const formatteds = Object.assign({}, values, {
        activity: JSON.parse(values.activity),
        deadline: moment(values.deadline).format(),
      });

      this.props.onSave(formatteds);
    })();

    if (this.props.valid) {
      this.toggle();
    }
  }

  toggle = () => {
    if (!this.state.modal) {
      this.props.load();
    }

    this.props.reset();

    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <Fragment>
        <AddButton className="mb-2 mr-1" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalHeader toggle={this.toggle}>
            Tarefa
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 p-3">
                    <ActivitySelect
                      name="activity"
                      validate={required}
                    />
                    <Field
                      type="date"
                      name="deadline"
                      label="Prazo de Entrega"
                      validate={[required, date.deadline]}
                    />
                    <CheckboxField
                      name="notifyExerciseConclusions"
                      label="Notificar conclusões de exercícios"
                    />
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={this.toggle} />
            <AddButton onClick={this.onSave} />
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'classwork' }),
)(ClassworkModal);
