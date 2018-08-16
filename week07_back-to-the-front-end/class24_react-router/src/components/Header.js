import React, { Component } from 'react';
import Search from './search/Search';
import { Link, Route } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

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
            <h1>News Search</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/articles">Search</Link>
              </li>
              <Route path="/articles" render={() => (
                <li>
                  <Link to="#" onClick={this.handleSpecial}>Special</Link>
                </li>
              )}/>
            </ul>
          </nav>
        </section>
      
        <section className="search-container">
          <Route component={Search}/>
        </section>
      
      </div>
    );
  }
}

export default Header;