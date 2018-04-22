import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddButton, CancelButton } from 'components/buttons';
import _ from 'lodash';

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
    const { exercises, exceptions } = this.props;

    const resources = _.filter(
      exercises,
      exercise => !exceptions.includes(exercise._id),
    );

    return (
      <Fragment>
        <AddButton className="mb-2 mr-1" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static" className="modal-dialog-expand">
          <ModalHeader toggle={this.toggle}>
            Exercícios
          </ModalHeader>
          <ModalBody>
            <ExerciseTable withCreatedAt={false} onSelecteds={this.onSelecteds} resources={resources} />
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={this.toggle} />
            <AddButton onClick={() => this.onSave()} />
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
