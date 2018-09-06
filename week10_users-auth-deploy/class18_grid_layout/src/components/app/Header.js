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
          <Link to="/whatever">Whatever</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/another">Another</Link>
        </nav>
      </header>
    );
  }
}

export default Header
