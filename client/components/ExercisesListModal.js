import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import _ from 'lodash/fp';

import './modal.css';

class ExercisesListModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      selecteds: [],
    };

    this.toggle = this.toggle.bind(this);
  }

  onCheckboxChange(event, exercise) {
    if (event.target.checked) {
      this.setState({
        selecteds: _.uniq([
          ...this.state.selecteds,
          exercise,
        ]),
      });
    } else {
      this.setState({
        selecteds: _.remove(this.state.selecteds, _.eq(exercise)),
      });
    }
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
            <table className="table table-hover table-striped table-bordered">
              <thead className="thead-inverse">
                <tr>
                  <th scope="col" className="text-center">#</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Expressão Regular</th>
                  <th scope="col">Criado</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, index) => (
                  <tr key={index.toString()}>
                    <th className="text-center">
                      <input type="checkbox" value="on" onChange={event => this.onCheckboxChange(event, exercise)} />
                    </th>
                    <th scope="row">{exercise.description}</th>
                    <td>{exercise.regularExpression}</td>
                    <td>{moment(exercise.createdAt).fromNow()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
