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

// const SpProtected = ({ component: Component, currentUser, ...rest }) => (
//   <Route 
//     {...rest}
//     render={props =>
//       currentUser.id === state.entities.boards.user_id
//     }
//   />
// )

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
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
// export const SpProtectedRoute = withRouter(connect(mapStateToProps)(SpProtected));
