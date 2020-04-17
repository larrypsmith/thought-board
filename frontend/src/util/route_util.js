import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact, state }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/profile`} />
      )
    }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({ 
    loggedIn: state.session.isAuthenticated,
    state,
    currentUser: state.session.user
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
