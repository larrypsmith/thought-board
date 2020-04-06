import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    demo: () => dispatch(login({ email: 'bobby@gs9.com', password: 'bobby123' }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
