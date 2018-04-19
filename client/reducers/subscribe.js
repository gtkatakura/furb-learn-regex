const initialValue = {
  finished: false,
  payload: null,
};

const subscribeReducer = (state = initialValue, { type, payload }) => {
  if (type === 'SUBSCRIBE_LOADED') {
    return {
      finished: true,
      payload,
    };
  }

  return state;
};

export default subscribeReducer;
