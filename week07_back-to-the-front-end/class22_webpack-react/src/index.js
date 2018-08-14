import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import logo from './assets/acl-square.png';

ReactDOM.render(
  <div>
    hello react!
    <img src={logo}/>
  </div>,
  document.getElementById('root')
);

