import axios from 'axios';
import {
  FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE,
} from '../items/itemTypes';

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchItemSuccess = items => ({
  type: FETCH_ITEM_SUCCESS,
  payload: items,
});

export const fetchItemFailure = error => ({
  type: FETCH_ITEM_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchItem = id => function (dispatch) {
  dispatch(fetchItemRequest());
  axios
    .get(`/items/${id}`, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchItemSuccess(data));
    })
    .catch(error => {
      dispatch(fetchItemFailure(error.response.data.error));
    });
};
