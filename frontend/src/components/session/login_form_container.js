import { connect } from "react-redux";
import { login , clearErrors } from "../../actions/session_actions";
import { closeModal } from '../../actions/modal_actions'
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
    demo: () => dispatch(login({email: 'bobby@gmail.com', password: 'bobby123' })),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
