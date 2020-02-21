import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit response config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
// serviceWorker();
