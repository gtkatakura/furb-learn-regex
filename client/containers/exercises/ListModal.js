import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExercisesListModal from 'components/exercises/ListModal';
import { fetchAll } from 'actions/professor/exercises';

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ExercisesListModal);
