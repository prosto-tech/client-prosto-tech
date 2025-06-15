import axios from 'axios';
import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
} from './addItemTypes';

export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST,
});

export const addItemSuccess = message => ({
  type: ADD_ITEM_SUCCESS,
  payload: message,
});

export const addItemFailure = error => ({
  type: ADD_ITEM_FAILURE,
  payload: error,
});

export const removeItemRequest = () => ({
  type: REMOVE_ITEM_REQUEST,
});

export const removeItemSuccess = message => ({
  type: REMOVE_ITEM_SUCCESS,
  payload: message,
});

export const removeItemFailure = error => ({
  type: REMOVE_ITEM_FAILURE,
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
