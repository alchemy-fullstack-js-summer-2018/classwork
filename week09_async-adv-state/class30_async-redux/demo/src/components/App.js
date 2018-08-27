import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Demo from './demo/Demo';
import Dashboard from './animals/Dashboard';
import styles from './App.css';

class App extends Component {


  render() {

    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/demo" component={Demo}/>
              <Route exact path="/animals" component={Dashboard}/>
              <Redirect to="/demo"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;