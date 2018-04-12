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
    if (newProps.resources !== this.props.resources) {
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
    const colSpan = (
      1 +
      (this.props.withCreatedAt ? 1 : 0) +
      React.Children.count(this.props.children)
    );

    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '50px' }}>#</th>
            {this.props.children}
            {this.props.withCreatedAt && <th style={{ width: '200px' }}>Criado</th>}
          </tr>
        </thead>
        <tbody>
          {this.props.isLoading
            ? (
              <tr>
                <td colSpan={colSpan} className="text-center">
                  Carregando...
                </td>
              </tr>
            ) : (
              this.props.resources.map((resource, index) => (
                <tr key={this.props.elementKey(resource)}>
                  <td className="text-center">
                    <input type="checkbox" value="on" onChange={event => this.onCheckboxChange(event, resource)} />
                  </td>
                  {this.props.render(resource, index)}
                  {this.props.withCreatedAt && <td>{moment(resource.createdAt).fromNow()}</td>}
                </tr>
              ))
            )}
        </tbody>
      </table>
    );
  }
}

ResourceTable.propTypes = {
  onSelecteds: PropTypes.func.isRequired,
  resources: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func.isRequired,
  elementKey: PropTypes.func,
  withCreatedAt: PropTypes.bool,
  isLoading: PropTypes.bool,
  // children: PropTypes.object.isRequired,
};

ResourceTable.defaultProps = {
  elementKey: _.get('_id'),
  withCreatedAt: true,
};

export default ResourceTable;
