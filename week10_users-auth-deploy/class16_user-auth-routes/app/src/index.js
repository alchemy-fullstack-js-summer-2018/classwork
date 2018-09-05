import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import 'react-tabs/style/react-tabs.css';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);