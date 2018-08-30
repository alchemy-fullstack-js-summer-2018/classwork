import React, { PureComponent, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, Route, Redirect,
  Link } from 'react-router-dom';
import Header from './Header';
import Ships from '../ships/Ships';
import ShipDetail from '../ships/ShipDetail';


export default class App extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ships" component={Ships}/>
              <Route path="/ships/:id" component={ShipDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>Home Page</h2>
        <p>I am the placeholder Home!</p>
        <Link to="/ships">View Ships</Link>
      </Fragment>
    );
  }
}