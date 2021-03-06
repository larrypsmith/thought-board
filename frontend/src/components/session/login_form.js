import React from "react";
import { withRouter } from "react-router-dom";
import './login.scss'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
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
      password: this.state.password
    };

    this.props.login(user)
      .then((res) => {
        if (this.props.errors.length === 0) {
          this.props.closeModal()
          this.props.history.push('/profile')
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
      <div className='login-form-main'>
        <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
        <div className='login-form-container'>
          <div className='modal-header'>LOGIN</div>
          <form className='login-form-form'>
            <div className='login-form'>
              <div className='credentials'>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <br />
              </div>
              <div className='login-errors'>{this.renderErrors()}</div>
              <div className='start-session'>
                <button onClick={this.handleSubmit} className='session-submit-btn'>
                  Submit
                </button>
                <br />
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
      </div>
    );
  }
}

export default withRouter(LoginForm);
