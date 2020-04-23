import React from "react";


function Nav() {
    return (
        <nav className="app-nav">
            <div><a className="app-nav__link" href="#">Profile</a></div>
            <div><a className="app-nav__link" href="#">Message</a></div>
            <div><a className="app-nav__link" href="#">Music</a></div>
            <div><a className="app-nav__link" href="#">News</a></div>
            <div><a className="app-nav__link" href="#">Settings</a></div>
        </nav>
    );
}

export default Nav;