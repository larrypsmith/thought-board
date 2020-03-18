import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <br />
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Thought-Board</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);
