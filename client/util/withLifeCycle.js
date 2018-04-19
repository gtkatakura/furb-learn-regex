import React, { Component } from 'react';

const withLifeCycle = WrappedComponent => class extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this.props, this.state);
    }
  }

  render() {
    const { onMount, ...rest } = this.props;
    return <WrappedComponent {...rest} />;
  }
};

export default withLifeCycle;
