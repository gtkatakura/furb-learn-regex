import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

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

  hasSelecteds() {
    return this.state.selecteds.length !== 0;
  }

  render() {
    const { newLink, component: ResourceTable, ...rest } = this.props;

    return (
      <div>
        <Link className="btn btn-primary m-1" to={newLink}>Criar</Link>
        <div className="col-md-12">
          <ResourceTable onDestroy={this.props.onDestroyButton} withLink {...rest} />
        </div>
      </div>
    );
  }
}

ResourceList.propTypes = {
  newLink: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
};

export default ResourceList;
