import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./Redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";


let renderEntireTree = (store) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App store={store}/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
renderEntireTree(store/*.getState()*/);

store.subscribe( ()=>{
    //let state = store.getState();
    renderEntireTree(store);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
