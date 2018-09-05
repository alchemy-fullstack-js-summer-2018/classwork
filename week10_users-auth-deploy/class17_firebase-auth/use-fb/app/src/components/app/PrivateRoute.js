import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, render, ...rest }) => {

  return <Route {...rest} render={props => {
    if(!user) return <Redirect 
      to={{
        pathname: '/auth/signin',
        state: { from: props.location.pathname }
      }}
    />;

    if(Component) return <Component {...props}/>;
    if(render) return render(props);
    return null;
    
  }}/>;

};

PrivateRoute.propTypes = {
  user: PropTypes.object,
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object
};

export default connect(
  state => ({ user: getUser(state) }),
  null
)(PrivateRoute);

