import { Sorting } from '../utils/constants';

const sort = (state = Sorting.CHEEP, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SORTING':
      return action.id;
    default:
      return state;
  }
};

export default sort;
