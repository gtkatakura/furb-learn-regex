import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import confirm from 'util/confirm';

class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteds: [],
    };

    this.onSelecteds = this.onSelecteds.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
  }

  onSelecteds(selecteds) {
    this.setState({ selecteds });
  }

  async onDestroy(...args) {
    if (await confirm('Tem certeza que deseja excluir esse registro?')) {
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
        <Link className="btn btn-primary m-1" to={newLink}>Criar</Link>
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
