import axios from 'axios';
import {
  ADD_RESERVE_REQUEST,
  ADD_RESERVE_SUCCESS,
  ADD_RESERVE_FAILURE,
  REMOVE_RESERVE_SUCCESS,
  REMOVE_RESERVE_FAILURE,
  REMOVE_RESERVE_REQUEST,
} from './startReserveTypes';

export const addReserveRequest = () => ({
  type: ADD_RESERVE_REQUEST,
});

export const addReserveSuccess = message => ({
  type: ADD_RESERVE_SUCCESS,
  payload: message,
});

export const addReserveFailure = error => ({
  type: ADD_RESERVE_FAILURE,
  payload: error,
});

export const removeReserveRequest = () => ({
  type: REMOVE_RESERVE_REQUEST,
});

export const removeReserveSuccess = message => ({
  type: REMOVE_RESERVE_SUCCESS,
  payload: message,
});

export const removeReserveFailure = error => ({
  type: REMOVE_RESERVE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addReserve = data => function (dispatch) {
  dispatch(addReserveRequest());
  axios
    .post('/reserve', data)
    .then(response => {
      const { data } = response;
      dispatch(addReserveSuccess(data.message));
    })
    .catch(error => {
      dispatch(addReserveFailure(error.response.data.error));
    });
};

// eslint-disable-next-line func-names
export const removeReserve = id => function (dispatch) {
  dispatch(removeReserveRequest());
  axios
    .delete(`/reserve/${id}`)
    .then(response => {
      const { data } = response;
      dispatch(removeReserveSuccess(data.message));
    })
    .catch(error => {
      dispatch(removeReserveFailure(error.response.data.message));
    });
};
