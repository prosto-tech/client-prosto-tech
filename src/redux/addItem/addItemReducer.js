import * as item from './addItemTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case item.ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case item.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case item.ADD_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case item.REMOVE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case item.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case item.REMOVE_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addItemReducer;
