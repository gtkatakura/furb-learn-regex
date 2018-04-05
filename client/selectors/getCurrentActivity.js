import _ from 'lodash/fp';
import getActivities from './getActivities';

const getCurrentActivity = (state, { params: { name } }) => (
  _.find(
    { name },
    getActivities(state),
  )
);

export default getCurrentActivity;
