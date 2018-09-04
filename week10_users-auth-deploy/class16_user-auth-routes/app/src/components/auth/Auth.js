import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';
import styles from './Auth.css';

class Auth extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    location: PropTypes.object
  }

  render() {
    const { user, signin, signup, location } = this.props;
    const redirect = location.state ? location.state.from : '/';
    console.log('redirect is', redirect);
    if(user) return <Redirect to={redirect}/>;
    
    return (
      <section className={styles.auth}>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit={signup} allowName={true}/>
            </div>
          )}/>
          <Redirect to="/auth/signin"/>
        </Switch>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    user: getUser(state) 
  }),
  { signup, signin }
)(Auth);