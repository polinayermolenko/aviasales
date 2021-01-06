import { combineReducers } from 'redux';
import sort from './sort';
import loadTickets from './loadTickets';
import filters from './filters';

const reducer = combineReducers({
  activeSorting: sort,
  ticketsReducer: loadTickets,
  activeFilters: filters,
});
export default reducer;
