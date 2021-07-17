import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (!auth)
        ? <Redirect to="/auth" />
        : <Component {...props} />
    )}
  />
);
export default PrivateRoute;