import React from "react";
import Profile from "./Pages/Profile/Profile";
import Message from './Pages/Message/Message';
import Music from './Pages/Music/Music';
import News from './Pages/News/News';
import Settings from './Pages/Settings/Settings';
import c from "./Main.module.css";
import {Route} from "react-router-dom";


function Main(props) {

    return (
        <main className={c.main}>
            <Route path={'/profile'} render={() => <Profile updateNewPostText={props.updateNewPostText}
                                                            addPost={props.addPost}
                                                            state={props.PostsData} />}/>
            <Route path={'/dialog'} render={() => <Message state={props.MessagesData}
                                                           addMessage={props.addMessage}
                                                           updateNewMessage={props.updateNewMessage}/>}/>
            <Route component={Music} path={'/music'}/>
            <Route component={News} path={'/news'}/>
            <Route component={Settings} path={'/settings'}/>
        </main>
    );
}

export default Main;