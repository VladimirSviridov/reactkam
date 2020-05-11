import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";

//Можно ещё так: const App = () => {
function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav store={props.store}/>
            <Main store={props.store}/>
        </div>
    );
}

export default App;
