import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExercisesListModal from 'components/exercises/ExercisesListModal';
import fetchAll from 'actions/exercises/fetchAll';

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ExercisesListModal);
