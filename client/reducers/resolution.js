const initialState = {
  loading: false,
  payload: null,
};

const resolutionReducer = (state = initialState, { type, payload }) => {
  if (type === 'RESOLUTION_FETCH_REQUESTED') {
    return {
      loading: true,
      payload: null,
    };
  }

  if (type === 'RESOLUTION_FETCH_SUCCEEDED') {
    return {
      loading: false,
      payload,
    };
  }

  return state;
};

export default resolutionReducer;
