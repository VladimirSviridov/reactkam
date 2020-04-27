import React from "react";
import c from './Nav.module.css';

function Nav() {
    return (
        <nav className={c.nav}>
            <div><a className={c.navLink} href="#">Profile</a></div>
            <div><a className={c.navLink} href="#">Message</a></div>
            <div><a className={c.navLink} href="#">Music</a></div>
            <div><a className={c.navLink} href="#">News</a></div>
            <div><a className={c.navLink} href="#">Settings</a></div>
        </nav>
    );
}

export default Nav;