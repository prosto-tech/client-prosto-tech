import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Routes from './Routes';
import './App.scss';
import store from './redux/store';

axios.defaults.baseURL = "https://server-prosto-tech.onrender.com";
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('ElectroBackupsToken')}`;


if (!localStorage.getItem('ElectroBackupsToken')) {
  localStorage.setItem('ElectroBackupsToken', undefined);
  localStorage.setItem('ElectroBackupsUser', '');
  window.location.reload();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
