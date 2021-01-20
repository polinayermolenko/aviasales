import { createSelector } from 'reselect';
import { filterTickets, sortTickets } from '../../utils/functions';

export const getTickets = ({ ticketsReducer }) => ticketsReducer.tickets;
export const getStop = ({ ticketsReducer }) => ticketsReducer.stop;
export const getError = ({ ticketsReducer }) => ticketsReducer.error;
export const getSorting = ({ activeSorting }) => activeSorting;
export const getFilters = ({ activeFilters }) => activeFilters;
export const getDisplayedTickets = createSelector(
  getFilters,
  getTickets,
  getSorting,
  (activeFilters, tickets, activeSorting) => {
    const filteredTickets = filterTickets(tickets, activeFilters);
    return sortTickets(filteredTickets, activeSorting);
  }
);
