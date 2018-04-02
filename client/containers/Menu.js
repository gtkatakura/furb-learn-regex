import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../components/Menu';
import userActions from '../actions/users';

const mapDispatchToProps = dispatch => bindActionCreators({
  logout: userActions.logout,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Menu);
