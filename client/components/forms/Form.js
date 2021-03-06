import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { replace } from 'react-router-redux';
import confirm from 'util/confirm';

const message = 'As alterações efetuadas serão perdidas, deseja continuar?';

class Form extends React.Component {
  componentDidMount() {
    this.unblock = browserHistory.listenBefore(({ pathname, hash }) => {
      if (browserHistory.getCurrentLocation().pathname === pathname) {
        return true;
      }

      if (this.props.dirty) {
        confirm(message).then(confirmed => {
          if (confirmed) {
            this.unblock();
            this.props.redirectTo(pathname);
          }
        });

        return false;
      }

      return true;
    });
  }

  componentWillUnmount() {
    this.unblock();
  }

  onSubmit = (...args) => {
    this.unblock();
    return this.props.onSubmit(...args);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  redirectTo: pathname => dispatch(replace(pathname)),
});

export default connect(null, mapDispatchToProps)(Form);
