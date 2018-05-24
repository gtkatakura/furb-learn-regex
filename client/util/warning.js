import { createConfirmation } from 'react-confirm';
import Confirmation from '../components/Confirmation';

const defaultConfirmation = createConfirmation(Confirmation);

const warning = async (confirmation, options = {}) => {
  await defaultConfirmation({
    confirmation,
    cancelable: false,
    ...options,
  });
};

export default warning;
