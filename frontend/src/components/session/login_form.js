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
    .then(res => console.log(res))
    .then(this.props.history.push('/profile'))
    // .then(this.props.closeModal())
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}><i className="fas fa-thumbtack"></i>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (      
      <div>
        <div className='login-form-container'>
          <form>
            <div className='login-form'>
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
          </form>
        </div>
        <div className='session-errors'>{this.renderErrors()}</div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
