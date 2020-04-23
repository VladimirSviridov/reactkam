import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";

//Можно ещё так: const App = () => {
function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Nav/>
        <Main/>
    </div>
  );
}

export default App;
