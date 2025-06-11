import * as item from './addItemTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

const getAddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case item.FETCH_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case item.FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case item.FETCH_CAR_FAILURE:
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

export default getAddItemReducer;
