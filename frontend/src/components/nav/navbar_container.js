import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
