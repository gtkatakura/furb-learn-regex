import React from 'react';
import _ from 'lodash/fp';

class TableBody extends React.Component {
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

    console.log(selecteds)

    this.setState({
      selecteds,
    });

    this.props.onSelecteds(selecteds);
  }

  render() {
    return (
      <tbody>
        {this.props.collection.map((element, index) => (
          <tr key={this.props.elementKey(element)}>
            <th className="text-center">
              <input type="checkbox" value="on" onChange={event => this.onCheckboxChange(event, element)} />
            </th>
            {this.props.render(element, index)}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
