import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';
import Header from './Header';
import Home from './Home';
import Game from '../game/Game';
import styles from './App.css';

class App extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.login();
  }

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
              <Route exact path="/games/:gameKey" component={Game}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { login }
)(App);