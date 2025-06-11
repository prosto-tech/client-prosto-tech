import {
  FETCH_ITEMS_SUCCESS, FETCH_ITEMS_REQUEST, FETCH_ITEMS_FAILURE,
} from './itemTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case FETCH_ITEMS_FAILURE:
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

export default itemReducer;
