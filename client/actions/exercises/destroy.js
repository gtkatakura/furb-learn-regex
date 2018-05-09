import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const destroy = values => async dispatch => {
  await new WebApi(`/api/exercises/${values._id}`).delete();

  dispatch({
    type: 'EXERCISE_DELETED',
    payload: _.map('_id', _.flatten([values])),
  });
};

export default destroy;
