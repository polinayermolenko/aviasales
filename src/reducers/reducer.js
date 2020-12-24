// import { combineReducers } from 'redux';
// import { Sorting } from '../utils/constants';

import { Sorting } from '../utils/constants';

// const sort = (state = Sorting.CHEEP, action) => {
//     switch (action.type) {
//       case 'SET_ACTIVE_SORTING':
//         return action.id;
//       default:
//         return state;
//     }
// }

const initialState = {
  tickets: [{ id: 1 }, { id: 4 }, { id: 10 }],
  activeSorting: Sorting.CHEEP,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      return {
        ...state,
        tickets: action.payload,
      };
    case 'SET_ACTIVE_SORTING':
      return { ...state, activeSorting: action.id };
    default:
      return state;
  }
};

// const reducer = combineReducers({
//   activeSorting: sort,
//   ticketsLoaded
// })
export default reducer;
