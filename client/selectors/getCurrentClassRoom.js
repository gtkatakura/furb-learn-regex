import _ from 'lodash/fp';
import getClassRooms from './getClassRooms';

const getCurrentClassRomm = (state, { params: { name } }) => (
  _.find(
    { name },
    getClassRooms(state),
  )
);

export default getCurrentClassRomm;
