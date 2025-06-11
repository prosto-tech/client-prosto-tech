import * as drive from './startReserveTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const testDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case drive.ADD_RESERVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.ADD_RESERVE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case drive.ADD_RESERVE_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case drive.REMOVE_RESERVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.REMOVE_RESERVE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case drive.REMOVE_RESERVE_FAILURE:
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

export default testDriveReducer;
