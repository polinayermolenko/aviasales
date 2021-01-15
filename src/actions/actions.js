export const setActiveSorting = (payload) => ({ type: 'SET_ACTIVE_SORTING', payload });

export const ticketsLoaded = (payload) => ({ type: 'FETCH_TICKETS_SUCCESS', payload });

export const setError = (payload) => ({ type: 'FETCH_TICKETS_FAILLURE', payload });

export const setActiveFilter = (payload) => ({ type: 'SET_ACTIVE_FILTER', payload });

export const transformTickets = (service) => (dispatch) => {
  service.getSearchId().then(() =>
    service
      .getTickets()
      .then(({ tickets, stop }) => {
        dispatch(ticketsLoaded({ tickets, stop }));
      })
      .catch(() => {
        dispatch(setError({ tickets: [], stop: false, error: true }));
      })
  );
};
