import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Auth from '../auth/Auth';
import PetList from '../pets/PetList';
import PetDetail from '../pets/PetDetail';
import AddPet from '../pets/AddPet';
import styles from './App.css';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
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
              <Route exact path="/" render={() => <h2>I am Home</h2>}/>
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
  { tryLoadUser }
)(App);