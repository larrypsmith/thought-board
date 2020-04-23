import React from "react";
import { withRouter } from "react-router-dom";
import './signup.scss'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.signedIn === true) {
    //   this.props.history.push("/login");
    // }

    this.setState({ errors: nextProps.errors });
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    
    this.props.signup(user)
      .then((res) => {
        if (this.props.errors.length === 0) {
          this.props.closeModal()
        }
      })

    
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}><i className="fas fa-thumbtack"></i> {this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='signup-form-main'>
        <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>

        <div className="signup-form-container">
          <div className='modal-header'>SIGNUP</div>
          <form className='login-form-form'>
            <div className="signup-form">
              <div className='signup-name-email'>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
                <br />
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
                <br />
              </div>
              <div className='signup-passwords'>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
                <br />
              </div>
              <div className='start-session'>
                <button onClick={this.handleSubmit} className='session-submit-btn'>
                  Submit
                </button>
                <button onClick={(e) => {
                  e.preventDefault();
                  this.props.demo();
                  this.props.closeModal();
                }} className='guest-btn'>
                  Guest Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='session-errors'>{this.renderErrors()}</div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
