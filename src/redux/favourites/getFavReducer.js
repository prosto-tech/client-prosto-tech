import * as fav from './favouriteTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
};

const getFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case fav.FETCH_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fav.FETCH_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };
    case fav.FETCH_FAVORITE_FAILURE:
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

export default getFavReducer;
