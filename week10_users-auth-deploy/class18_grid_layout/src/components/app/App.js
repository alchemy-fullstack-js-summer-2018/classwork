import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Whatever from './Whatever';
import styles from './App.css';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/whatever" component={Whatever}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App