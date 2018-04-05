const initialValue = {
  loaded: false,
  isLoading: false,
  entities: [],
};

const activityReducer = (state = initialValue, { type, payload }) => {
  if (type === 'ACTIVITY_FETCH_REQUESTED') {
    return {
      loaded: false,
      isLoading: true,
      entities: [],
    };
  }

  if (type === 'ACTIVITY_FETCH_SUCCEEDED') {
    return {
      loaded: true,
      isLoading: false,
      entities: payload,
    };
  }

  if (type === 'ACTIVITY_FETCH_FAILED') {
    return {
      ...state,
      loaded: false,
      isLoading: false,
      error: payload,
    };
  }

  return state;
};

export default activityReducer;
