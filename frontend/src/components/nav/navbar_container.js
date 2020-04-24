import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  if (state.session.user === undefined) {
    return {
      history: ownProps.history,
      loggedIn: state.session.isAuthenticated,
    }
  } else {
    return {
      history: ownProps.history,
      loggedIn: state.session.isAuthenticated,
      username: state.session.user.username
    }

  }

};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, boardId, id, title, caption, url) => dispatch(openModal(modal, boardId, id, title, caption, url)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
