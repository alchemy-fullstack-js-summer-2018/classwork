import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  handleSearch = () => {

  };

  render() {
    
    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
        <main>
        
        </main>
      </div>
    );
  }
}

export default App;