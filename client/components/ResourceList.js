import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import confirm from 'util/confirm';

import { CreateButton } from 'components/buttons';

class ResourceList extends React.Component {
  state = {
    selecteds: [],
  };

  onSelecteds = selecteds => {
    this.setState({ selecteds });
  }

  onDestroy = async (...args) => {
    if (await confirm('Tem certeza que deseja excluir?')) {
      this.props.onDestroy(...args);
    }
  }

  hasSelecteds() {
    return this.state.selecteds.length !== 0;
  }

  render() {
    const { newLink, component: ResourceTable, ...rest } = this.props;

    return (
      <div>
        <CreateButton className="m-1" redirectTo={newLink} />
        <div className="col-md-12">
          <ResourceTable withLink {...rest} onDestroy={this.onDestroy} />
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
