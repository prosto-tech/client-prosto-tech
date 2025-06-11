import axios from 'axios';
import {
  FETCH_RESERVE_REQUEST, FETCH_RESERVE_SUCCESS, FETCH_RESERVE_FAILURE,
} from './startReserveTypes';

export const fetchReserveRequest = () => ({
  type: FETCH_RESERVE_REQUEST,
});

export const fetchReserveSuccess = reserve => ({
  type: FETCH_RESERVE_SUCCESS,
  payload: reserve,
});

export const fetchReserveFailure = error => ({
  type: FETCH_RESERVE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchReserve = () => function (dispatch) {
  dispatch(fetchReserveRequest());
  axios
    .get('/reserves', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchReserveSuccess(data));
    })
    .catch(error => {
      dispatch(fetchReserveFailure(error.response.data.error));
    });
};
