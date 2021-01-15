import { combineReducers } from 'redux';
import sort from './sort';
import loadTickets from './loadTickets';
import filter from './filter';

const reducer = combineReducers({
  activeSorting: sort,
  ticketsReducer: loadTickets,
  activeFilters: filter,
});
export default reducer;
