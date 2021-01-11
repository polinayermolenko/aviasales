import { Sorting } from '../utils/constants';

const sort = (state = Sorting.CHEEP, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE_SORTING':
      return payload;
    default:
      return state;
  }
};

export default sort;
