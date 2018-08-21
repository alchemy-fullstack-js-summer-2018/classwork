import React, { Component } from 'react';
import Paging from './paging/Paging';
import { Link, Route } from 'react-router-dom';
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
            </ul>
          </nav>
        </section>
      
        <section className="search-container">
          <Route render={() => (    
            <Paging 
              total={2}
              prev={null}
              next={null}
              onPage={null}
            />
          )}/>
        </section>
      
      </div>
    );
  }
}

export default Header;