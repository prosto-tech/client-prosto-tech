import axios from 'axios';
import {
  ADD_CAR_REQUEST,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILURE,
  REMOVE_CAR_SUCCESS,
  REMOVE_CAR_FAILURE,
  REMOVE_CAR_REQUEST,
} from './addItemTypes';

export const addItemRequest = () => ({
  type: ADD_CAR_REQUEST,
});

export const addItemSuccess = message => ({
  type: ADD_CAR_SUCCESS,
  payload: message,
});

export const addItemFailure = error => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});

export const removeItemRequest = () => ({
  type: REMOVE_CAR_REQUEST,
});

export const removeItemSuccess = message => ({
  type: REMOVE_CAR_SUCCESS,
  payload: message,
});

export const removeItemFailure = error => ({
  type: REMOVE_CAR_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addItem = data => function (dispatch) {
  dispatch(addItemRequest());
  axios
    .post('/add_item', data)
    .then(response => {
      const { data } = response;
      dispatch(addItemSuccess(data.message));
    })
    .catch(error => {
      dispatch(addItemFailure(error.response.data.error));
    });
};

// eslint-disable-next-line func-names
export const removeItem = id => function (dispatch) {
  dispatch(removeItemRequest());
  axios
    .delete(`/items/${id}`)
    .then(response => {
      const { data } = response;
      dispatch(removeItemSuccess(data.message));
    })
    .catch(error => {
      dispatch(removeItemFailure(error.response.data.message));
    });
};
