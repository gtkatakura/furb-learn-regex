import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';
import moment from 'moment';

class ResourceTable extends React.Component {
  constructor() {
    super();

    this.state = {
      selecteds: [],
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.collection !== this.props.collection) {
      this.setState({ selecteds: [] });
    }
  }

  onCheckboxChange(event, element) {
    const selecteds = event.target.checked
      ? _.uniq([...this.state.selecteds, element])
      : _.remove(_.eq(element), this.state.selecteds);

    this.setState({
      selecteds,
    });

    this.props.onSelecteds(selecteds);
  }

  render() {
    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '50px' }}>#</th>
            {this.props.children}
            <th style={{ width: '200px' }}>Criado</th>
          </tr>
        </thead>
        <tbody>
          {this.props.collection.map((resource, index) => (
            <tr key={this.props.elementKey(resource)}>
              <td className="text-center">
                <input type="checkbox" value="on" onChange={event => this.onCheckboxChange(event, resource)} />
              </td>
              {this.props.render(resource, index)}
              <td>{moment(resource.createdAt).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ResourceTable.propTypes = {
  onSelecteds: PropTypes.func.isRequired,
  collection: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  elementKey: PropTypes.func,
};

ResourceTable.defaultProps = {
  elementKey: _.get('_id'),
};

export default ResourceTable;
