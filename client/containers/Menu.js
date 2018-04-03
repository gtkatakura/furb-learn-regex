import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../components/Menu';
import { logout } from '../actions/users';

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(null, mapDispatchToProps)(Menu);
