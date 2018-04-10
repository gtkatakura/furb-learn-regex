import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import ExerciseTable from './ExerciseTable';
import './modal.css';

class ExercisesListModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      selecteds: [],
    };

    this.toggle = this.toggle.bind(this);
    this.onSelecteds = this.onSelecteds.bind(this);
  }

  onSelecteds(selecteds) {
    this.setState({ selecteds });
  }

  onSave() {
    this.props.onSave(this.state.selecteds);
    this.toggle();
  }

  toggle() {
    if (!this.state.modal) {
      this.props.load();
    }

    this.setState({
      modal: !this.state.modal,
      selecteds: [],
    });
  }

  render() {
    const { exercises } = this.props;

    return (
      <Fragment>
        <button type="button" className="btn btn-primary mb-2 mr-1" onClick={this.toggle}>Adicionar</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static" className="modal-dialog-expand">
          <ModalHeader toggle={this.toggle}>
            Exercícios
          </ModalHeader>
          <ModalBody>
            <ExerciseTable prefixKey="modal_" onSelecteds={this.onSelecteds} exercises={exercises} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
            <Button color="primary" onClick={() => this.onSave()}>Adicionar</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.exercise.entities,
});

export default connect(mapStateToProps, null)(ExercisesListModal);
