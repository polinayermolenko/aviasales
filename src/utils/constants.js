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

export { Sorting, SORT_BUTTONS, FILTER_BUTTONS };
