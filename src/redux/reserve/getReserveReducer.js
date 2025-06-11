import * as drive from './startReserveTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

const getReserveReducer = (state = initialState, action) => {
  switch (action.type) {
    case drive.FETCH_RESERVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.FETCH_RESERVE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case drive.FETCH_RESERVE_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getReserveReducer;
