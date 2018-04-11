import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from 'components/Menu';
import { logout } from 'actions/users';

const mapStateToProps = state => ({
  userName: state.user.name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
