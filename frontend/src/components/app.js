import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import NavBarContainer from './nav/navbar_container';
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "../components/profile/profile_container";
import BoardBuildContainer from '../components/boards/board_build_container';
import NoteComposeContainer from '../components/notes/note_compose_container';
import BoardBoxContainer from '../components/boards/board_box_container';
import ModalContainer from '../components/modal/modal';

const App = () => (
    <div>
        <Route path="/" component={ModalContainer} />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path='/boards/:id' component={BoardBoxContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_board" component={BoardBuildContainer} />
            <ProtectedRoute exact path="/new_note" component={NoteComposeContainer} />
        </Switch>
    </div>
);

export default App;
