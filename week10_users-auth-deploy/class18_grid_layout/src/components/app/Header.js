import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <h1>Some App</h1>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/whatever">Whatever</Link>
        </nav>
      </header>
    );
  }
}

export default Header
