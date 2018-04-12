import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field } from 'components/forms';
import { required } from 'validations';
import ActivitySelect from 'containers/activities/ActivitySelect';
import { fetchAll } from 'actions/activities';

class ClassworkModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    this.props.handleSubmit(values => {
      const formatteds = Object.assign({}, values, {
        activity: JSON.parse(values.activity),
        deadline: moment(values.deadline).format(),
      });

      this.props.onSave(formatteds);
    })();

    if (this.props.valid) {
      this.props.reset();
      this.toggle();
    }
  }

  toggle() {
    if (!this.state.modal) {
      this.props.load();
    }

    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Fragment>
        <button type="button" className="btn btn-primary mb-2 mr-1" onClick={this.toggle}>Adicionar</button>
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
                      validate={required}
                    />
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
            <Button type="button" color="primary" onClick={this.onSave}>Adicionar</Button>
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
