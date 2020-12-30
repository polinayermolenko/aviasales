export const setActiveSorting = (id) => ({ type: 'SET_ACTIVE_SORTING', id });

export const ticketsLoaded = (newTickets) => ({ type: 'TICKETS_LOADED', payload: newTickets });

export const setActiveFilter = (filter) => ({ type: 'SET_ACTIVE_FILTER', filter });

export const transformTickets = (service) => (dispatch) => {
  service.getSearchId().then((res) =>
    service.getTickets(res).then((body) => {
      let index = 10;
      const { tickets } = body;
      let data = tickets.slice(0, 25);
      data = data.map((item) => {
        const { price, carrier, segments } = item;
        const [from, to] = segments;
        const {
          origin: toOrigin,
          destination: toDestination,
          //   date: toDepartureTime,
          //   stops: toStops,
          //   duration: toDuration,
        } = to;
        const {
          origin: fromOrigin,
          destination: fromDestination,
          // date: fromDepartureTime,
          // stops: fromStops,
          // duration: fromDuration,
        } = from;

        return {
          // eslint-disable-next-line no-plusplus
          id: index++,
          price: price.toLocaleString('ru'),
          carrier,
          to: {
            toOrigin,
            toDestination,
          },
          from: {
            fromOrigin,
            fromDestination,
          },
        };
      });
      console.log(data);
      dispatch(ticketsLoaded(data));
    })
  );
};
