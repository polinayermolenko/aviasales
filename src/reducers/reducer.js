import { combineReducers } from 'redux';
import { Sorting } from '../utils/constants';

const sort = (state = Sorting.CHEEP, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SORTING':
      return action.id;
    default:
      return state;
  }
};

const initialState = {
  tickets: [],
};
const tickets = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TICKETS_LOADED':
      return {
        tickets: [...state.tickets, ...payload],
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  activeSorting: sort,
  ticketsReducer: tickets,
});
export default reducer;
