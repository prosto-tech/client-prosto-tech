import axios from 'axios';
import {
  FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE,
} from './favouriteTypes';

export const fetchAddItemRequest = () => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchAddItemSuccess = items => ({
  type: FETCH_ITEM_SUCCESS,
  payload: items,
});

export const fetchAddItemFailure = error => ({
  type: FETCH_ITEM_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchAddItem = () => function (dispatch) {
  dispatch(fetchAddItemRequest());
  axios
    .get('/add_item', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchAddItemSuccess(data));
    })
    .catch(error => {
      dispatch(fetchAddItemFailure(error.response.data.error));
    });
};
