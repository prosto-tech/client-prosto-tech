import {
  FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE,
} from '../items/itemTypes';

const initialState = {
  loading: false,
  item: {},
  error: '',
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
        error: '',
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        item: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
