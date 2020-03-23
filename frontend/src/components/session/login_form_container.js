import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    demo: () => dispatch(login({email: 'bobby@gs9.com', password: 'bobby123' }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
