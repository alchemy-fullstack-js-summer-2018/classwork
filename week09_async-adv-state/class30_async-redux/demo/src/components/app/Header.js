import React, { Component } from 'react';
// import { connect }
import { NavLink } from 'react-router-dom';
import Error from './Error';
import logo from '../../assets/logo.png';
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
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/animals">Animals</NavLink>
              </li>
              
            </ul>
          </nav>
        </section>
      
        <Error/>
      </div>
    );
  }
}

export default Header;