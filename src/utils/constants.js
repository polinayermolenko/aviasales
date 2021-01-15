const Sorting = {
  CHEEP: 'cheep',
  FAST: 'fast',
};

const SORT_BUTTONS = [
  { name: 'Самый дешевый', id: 'cheep' },
  { name: 'Самый быстрый', id: 'fast' },
];

const FILTER_BUTTONS = [
  { name: 'Все', id: 'all' },
  { name: 'Без пересадок', id: 0 },
  { name: '1 пересадка', id: 1 },
  { name: '2 пересадки', id: 2 },
  { name: '3 пересадки', id: 3 },
];

const Filter = {
  ALL: 'all',
  NO_TRANSFER: 0,
  ONE_TRANSFER: 1,
  TWO_TRANSFERS: 2,
  THREE_TRANSFERS: 3,
};

const FILTERS = [Filter.ALL, Filter.NO_TRANSFER, Filter.ONE_TRANSFER, Filter.TWO_TRANSFERS, Filter.THREE_TRANSFERS];

const FILTERS_LENGTH = Object.keys(Filter).length;

const TICKETS_PER_PERCENT = 90;

export { Sorting, SORT_BUTTONS, FILTER_BUTTONS, Filter, FILTERS, FILTERS_LENGTH, TICKETS_PER_PERCENT };
