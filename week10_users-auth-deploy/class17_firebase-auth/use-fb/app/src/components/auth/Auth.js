import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './reducers';
import styles from './Auth.css';
import firebaseui from 'firebaseui';
import { auth, providers } from '../../services/firebase';

const ui = new firebaseui.auth.AuthUI(auth);

class Auth extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
    location: PropTypes.object
  }

  componentDidMount() {
    if(this.props.user) return;

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        providers.EmailAuthProvider.PROVIDER_ID,
        providers.GoogleAuthProvider.PROVIDER_ID,
        providers.TwitterAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult() {
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    });
  }

  render() {
    const { user, location } = this.props;
    const redirect = location.state ? location.state.from : '/';
    if(user) return <Redirect to={redirect}/>;
    
    return (
      <div className={styles.auth} id="firebaseui-auth-container">
       
      </div>
    );
  }
}

export default connect(
  state => ({ 
    user: getUser(state) 
  }),
  null,
  null
)(Auth);