import { connect } from 'react-redux';

import ActivitySelect from 'components/activities/Select';

const mapStateToProps = state => ({
  resources: state.activity.entities,
});

export default connect(mapStateToProps, null)(ActivitySelect);
