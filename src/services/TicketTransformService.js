import { add, format } from 'date-fns';

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

const formatData = (item) => {
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

export default formatData;
