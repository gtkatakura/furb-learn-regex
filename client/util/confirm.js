import { createConfirmation } from 'react-confirm';
import Confirmation from '../components/Confirmation';

const defaultConfirmation = createConfirmation(Confirmation);

const confirm = async (confirmation, options = {}) => {
  try {
    await defaultConfirmation({ confirmation, ...options });
    return true;
  } catch (e) {
    return false;
  }
};

export default confirm;
