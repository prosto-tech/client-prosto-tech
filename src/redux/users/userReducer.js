import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
} from './userTypes';

const initialState = {
  loading: false,
  login: false,
  user: {},
  token: localStorage.getItem('ElectroBackupsToken'),
  username: '' || localStorage.getItem('ElectroBackupsUser'),
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        user: action.payload,
        token: localStorage.setItem('ElectroBackupsToken', action.payload.token),
        username: localStorage.setItem('ElectroBackupsUser', action.payload.username),
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
