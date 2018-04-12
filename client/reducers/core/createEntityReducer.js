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

  return state;
};

export default createEntityReducer;
