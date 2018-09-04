import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { Route, Link } from 'react-router-dom';
import Error from './Error';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <header>
        <h1>Pets 4 All</h1>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/pets">Pets</Link>
          &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }
          
          &nbsp;
          <Route path="/pets/:id" render={({ match: { url } }) => {
            return (
              <Fragment>
                &nbsp;
                <Link to={`${url}/paragraph`}>paragraph view</Link>
                &nbsp;
                <Link to={`${url}/list`}>list view</Link>
              </Fragment>
            );
          }}/>
        </nav>
        { user && <span>Welcome {user.name}!</span> }
        <Error/>
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);
