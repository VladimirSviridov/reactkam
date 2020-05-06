import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {subscribe, addPost, updateNewPostText,
    addMessage, updateNewMessage} from "./Redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';



let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addMessage={addMessage}
                     updateNewMessage={updateNewMessage}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
renderEntireTree(state);
subscribe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
