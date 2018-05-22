import _ from 'lodash/fp';

const destroy = ({ entityName, service }) => values => async dispatch => {
  await service.destroy(values);

  dispatch({
    type: `${entityName}_DELETED`,
    payload: _.map('_id', _.flatten([values])),
  });
};

export default destroy;
