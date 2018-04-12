import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const destroy = values => async dispatch => {
  if (Array.isArray(values)) {
    await Promise.all(values.map(value => new WebApi(`/api/activities/${value._id}`).delete()));
  } else {
    await new WebApi(`/api/activities/${values._id}`).delete();
  }

  dispatch({
    type: 'ACTIVITY_DELETED',
    payload: _.map('_id', _.flatten([values])),
  });
};

export default destroy;
