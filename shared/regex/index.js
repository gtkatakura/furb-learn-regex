import _ from 'lodash';

export const toRegex = value => {
  try {
    if (value) {
      return new RegExp(`^(${value})$`, 'g');
    }

    return { test: () => false };
  } catch (err) {
    return { test: () => false };
  }
};
