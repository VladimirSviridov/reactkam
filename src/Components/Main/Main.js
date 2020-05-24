import React from "react";
import Music from './Pages/Music/Music';
import News from './Pages/News/News';
import Settings from './Pages/Settings/Settings';
import c from "./Main.module.css";
import {Route} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "./Pages/Profile/ProfileContainer";
import Login from "./Pages/Login/Login";
import MessageContainer from "./Pages/Message/MessageWrite/MessageContainer";


function Main() {
    return (
        <main className={c.main}>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
            <Route path={'/dialog'} render={() => <MessageContainer />}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route component={Music} path={'/music'}/>
            <Route component={News} path={'/news'}/>
            <Route component={Settings} path={'/settings'}/>
        </main>
    );
}

export default Main;