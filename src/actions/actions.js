import { add, format } from 'date-fns';

export const setActiveSorting = (payload) => ({ type: 'SET_ACTIVE_SORTING', payload });

export const ticketsLoaded = (payload) => ({ type: 'FETCH_TICKETS_SUCCESS', payload });

export const setError = (payload) => ({ type: 'FETCH_TICKETS_FAILLURE', payload });

export const setActiveFilter = (payload) => ({ type: 'SET_ACTIVE_FILTER', payload });

const getTimeOfFlight = (date, duration) => {
  const result = add(new Date(date), {
    seconds: duration,
  });

  return `${format(new Date(date), 'HH:mm')} - ${format(new Date(result), 'HH:mm')}`;
};

const formatStopsLabel = (stopsCount) => {
  let label = 'ПЕРЕСАДКИ';
  if (!stopsCount) {
    label = 'БЕЗ ПЕРЕСАДОК';
    return label;
  }
  if (stopsCount === 1) {
    label = 'ПЕРЕСАДКА';
  }
  if (stopsCount > 4) {
    label = 'ПЕРЕСАДОК';
  }
  return `${stopsCount} ${label}`;
};

export const formatData = (item) => {
  const { price, carrier, segments } = item;
  const [from, to] = segments;
  const {
    origin: toOrigin,
    destination: toDestination,
    date: toDepartureTime,
    stops: toStops,
    duration: toDuration,
  } = to;
  const {
    origin: fromOrigin,
    destination: fromDestination,
    date: fromDepartureTime,
    stops: fromStops,
    duration: fromDuration,
  } = from;

  return {
    id: Math.random(),
    price: price.toLocaleString('ru'),
    carrier,
    to: {
      toRoute: `${toOrigin} - ${toDestination}`,
      toTime: getTimeOfFlight(toDepartureTime, toDuration),
      toDuration: `${Math.floor(toDuration / 60)}ч ${toDuration % 60}м `,
      toStops: toStops.join(', '),
      toStopsCount: formatStopsLabel(toStops.length),
    },
    from: {
      fromRoute: `${fromOrigin} - ${fromDestination}`,
      fromTime: getTimeOfFlight(fromDepartureTime, fromDuration),
      fromDuration: `${Math.floor(fromDuration / 60)}ч ${fromDuration % 60}м `,
      fromStops: fromStops.join(', '),
      fromStopsCount: formatStopsLabel(fromStops.length),
    },
  };
};

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

export const sortTickets = (tickets, activeSorting) => {
  let sortedTickets;
  if (activeSorting === 'cheep') {
    sortedTickets = tickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
  } else {
    sortedTickets = tickets.sort(
      (ticket1, ticket2) =>
        ticket1.segments[0].duration +
        ticket1.segments[1].duration -
        (ticket2.segments[0].duration + ticket2.segments[1].duration)
    );
  }
  return sortedTickets;
};

export const filterTickets = (tickets, activeFilters) => {
  let filteredTickets = activeFilters.map((item) =>
    tickets.filter(({ segments }) => segments[0].stops.length === item || segments[1].stops.length === item)
  );
  filteredTickets = Array.from(new Set(filteredTickets.flat().map(JSON.stringify))).map(JSON.parse);
  return filteredTickets;
};
