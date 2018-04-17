import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { confirmable } from 'react-confirm';

class Confirmation extends React.Component {
  render() {
    const {
      okLabbel = 'OK',
      cancelLabel = 'Cancel',
      title = 'Atenção!',
      confirmation,
      show,
      proceed,
      cancel,
    } = this.props;

    return (
      <Modal isOpen={show}>
        <ModalHeader toggle={this.toggle}>
          {title}
        </ModalHeader>
        <ModalBody>
          {confirmation}
        </ModalBody>
        <ModalFooter>
          <Button onClick={cancel}>{cancelLabel}</Button>
          <Button color="primary" onClick={proceed}>{okLabbel}</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

Confirmation.propTypes = {
  okLabbel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  dismiss: PropTypes.func,
  enableEscape: PropTypes.bool,
};

export default confirmable(Confirmation);
