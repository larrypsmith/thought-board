import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.scss";


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
        <div className='nav-links'>
          <Link className='nav-link' to={"/profile"}>Profile</Link>
          <button className='nav-btn' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='nav-links'>
          <Link className='nav-link' to={"/signup"}>Signup</Link>
          <br />
          <Link className='nav-link' to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='nav-cont'>
        <h1 className='nav-title'>Thought-Board</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);
