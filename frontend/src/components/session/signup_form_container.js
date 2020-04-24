import { connect } from "react-redux";
import { signup, login, clearErrors} from "../../actions/session_actions";
import { closeModal } from '../../actions/modal_actions';
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
    demo: () => dispatch(login({ email: 'bobby@gmail.com', password: 'bobby123' })),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
