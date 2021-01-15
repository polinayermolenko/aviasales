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

export const checkActiveFilter = (filters, currentFilterId) => filters.some((el) => el === currentFilterId);
