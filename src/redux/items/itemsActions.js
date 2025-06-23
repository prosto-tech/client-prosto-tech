import axios from 'axios';
import {
  FETCH_ITEMS_SUCCESS, FETCH_ITEMS_REQUEST, FETCH_ITEMS_FAILURE,
} from './itemsTypes';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchItems = () => function (dispatch) {
  dispatch(fetchItemsRequest());
  axios
    .get('/items', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchItemsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchItemsFailure(error.response.data.error));
    });
};
