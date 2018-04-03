const initialValue = {
  loaded: false,
  isLoading: false,
  entities: [],
};

const userReducer = (state = initialValue, { type, payload }) => {
  if (type === 'EXERCISE_FETCH_REQUESTED') {
    return {
      loaded: false,
      isLoading: true,
      entities: [],
    };
  }

  if (type === 'EXERCISE_FETCH_SUCCEEDED') {
    return {
      loaded: true,
      isLoading: false,
      entities: payload,
    };
  }

  if (type === 'EXERCISE_FETCH_FAILED') {
    return {
      ...state,
      loaded: false,
      isLoading: false,
      error: payload,
    };
  }

  return state;
};

export default userReducer;
