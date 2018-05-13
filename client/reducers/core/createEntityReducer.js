import _ from 'lodash/fp';

const initialValue = {
  loaded: false,
  isLoading: false,
  entities: [],
};

const createEntityReducer = entityName => (state = initialValue, { type, payload }) => {
  if (type === `${entityName}_FETCH_REQUESTED`) {
    return {
      loaded: false,
      isLoading: true,
      entities: [],
    };
  }

  if (type === `${entityName}_FETCH_SUCCEEDED`) {
    return {
      loaded: true,
      isLoading: false,
      entities: payload,
    };
  }

  if (type === `${entityName}_FETCH_FAILED`) {
    return {
      ...state,
      loaded: false,
      isLoading: false,
      error: payload,
    };
  }

  if (type === `${entityName}_DELETED`) {
    return {
      ...state,
      entities: _.filter(entity => !_.includes(entity._id, payload), state.entities)
    };
  }

  if (type === `${entityName}_UPDATE`) {
    const entity = _.find(['_id', payload._id], state.entities) || {};
    const entities = _.difference(state.entities, [entity]);

    return {
      ...state,
      entities: [
        ...entities,
        { ...entity, ...payload },
      ],
    };
  }

  return state;
};

export default createEntityReducer;
