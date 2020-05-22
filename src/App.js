import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";

function App(props) {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav store={props.store}/>
            <Main />
        </div>
    );
}

export default App;
