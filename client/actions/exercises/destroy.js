import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const destroy = values => async dispatch => {
  if (Array.isArray(values)) {
    await Promise.all(values.map(value => new WebApi(`/api/exercises/${value._id}`).delete()));
  } else {
    await new WebApi(`/api/exercises/${values._id}`).delete();
  }

  dispatch({
    type: 'EXERCISE_DELETED',
    payload: _.map('_id', _.flatten([values])),
  });
};

export default destroy;
