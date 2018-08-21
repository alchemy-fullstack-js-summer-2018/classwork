import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {

  };
  
  handleSpecial = event => {
    event.preventDefault();
    alert('that link is so special!');
  };

  render() {

    return (
      <div className={styles.header}>

        <section className="header-container">
          <div className="logo">
            <img src={logo}/>
            <h1>Animals</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
              
            </ul>
          </nav>
        </section>
      
      </div>
    );
  }
}

export default Header;