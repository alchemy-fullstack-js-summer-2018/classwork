import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

class Home extends PureComponent {
  
  render() { 
    return (
      <section className={styles.home}>
        <h2>Home Page</h2>
      </section>
    );
  }
}
 
export default Home;