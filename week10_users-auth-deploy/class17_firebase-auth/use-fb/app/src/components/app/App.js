import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { initAuth } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Home from './Home';
import Header from './Header';
import Auth from '../auth/Auth';
import PetList from '../pets/PetList';
import PetDetail from '../pets/PetDetail';
import AddPet from '../pets/AddPet';
import styles from './App.css';

class App extends PureComponent {

  static propTypes = {
    initAuth: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool
  };

  componentDidMount() {
    this.props.initAuth();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            { checkedAuth && 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/pets" component={PetList}/>
              <PrivateRoute path="/pets/new" component={AddPet}/>
              
              <PrivateRoute path="/pets/:id" component={PetDetail}/>
              
              {/* same as: <PrivateRoute path="/pets/:id" render={({ match, location, history }) => {
                return <PetDetail match={match} location={location} history={history}/>;
              }/> */}

              <Redirect to="/"/>
            </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { initAuth }
)(App);