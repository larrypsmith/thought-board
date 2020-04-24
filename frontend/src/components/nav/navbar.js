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
    if (this.props.loggedIn && this.props.history.location.pathname === '/profile'){
      return (
        <div className='nav-links'>
          <div className="profile-greeting">Hello {this.props.username}!</div>
          <a className='nav-link' onClick={this.logoutUser}>Logout</a>
        </div>
      );
    } else if (this.props.loggedIn) {
      return (
        <div className='nav-links'>
          <Link className='nav-link' to={"/profile"}>Profile</Link>
          <a className='nav-link' onClick={this.logoutUser}>Logout</a>
        </div>
      );
    }
    
    else {
      return (
        <div className='login-links'>
          <button onClick={() => this.props.openModal('signup')}>Signup</button>
          <button onClick={() => this.props.openModal('login')}>Login</button>
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
