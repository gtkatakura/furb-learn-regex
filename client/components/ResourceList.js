import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton';

class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteds: [],
    };

    this.onSelecteds = this.onSelecteds.bind(this);
    this.onDestroyButton = this.onDestroyButton.bind(this);
  }

  onSelecteds(selecteds) {
    this.setState({ selecteds });
  }

  onDestroyButton() {
    this.props.onDestroy(this.state.selecteds);
    this.setState({ selecteds: [] });
  }

  render() {
    const { newLink, collection, component: TableComponent } = this.props;

    return (
      <div>
        <Link className="btn btn-primary m-1" href={newLink} to={newLink}>Criar</Link>
        <DeleteButton
          className="btn btn-danger"
          onClick={this.onDestroyButton}
          disabled={this.state.selecteds.length === 0}
        />
        <div className="col-md-12 p-3">
          <TableComponent onSelecteds={this.onSelecteds} collection={collection} withLink />
        </div>
      </div>
    );
  }
}

ResourceList.propTypes = {
  newLink: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
};

export default ResourceList;
