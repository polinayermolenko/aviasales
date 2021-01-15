import { Filter, FILTERS, FILTERS_LENGTH } from '../utils/constants';

const initialState = FILTERS;

const filters = (state = initialState, { type, payload = {} }) => {
  const { filterId } = payload;
  switch (type) {
    case 'SET_ACTIVE_FILTER':
      if (state.length === FILTERS_LENGTH && filterId !== Filter.All) {
        return state.filter((el) => el !== Filter.ALL && el !== filterId);
      }

      if (filterId === Filter.ALL) {
        if (state.some((el) => el === Filter.ALL)) {
          return [];
        }

        return initialState;
      }

      if (filterId !== Filter.ALL && state.length === FILTERS_LENGTH - 2) {
        if (state.some((el) => el === filterId)) {
          return state.filter((el) => el !== filterId);
        }

        return [...state, filterId, Filter.ALL];
      }

      if (filterId !== Filter.ALL) {
        if (state.some((el) => el === filterId)) {
          return state.filter((el) => el !== filterId);
        }

        return [...state, filterId];
      }

      break;

    default:
      return state;
  }
  return null;
};

export default filters;
