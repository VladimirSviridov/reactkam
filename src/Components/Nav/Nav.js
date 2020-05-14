import React from "react";
import c from './Nav.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./Friends/FriendItem";
import MyFriends from "./Friends/MyFriends/MyFriends";


function Nav(props) {

    return (
        <nav className={c.nav}>
            <div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/dialog">Message</NavLink>
                </div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/users">Users</NavLink>
                </div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/music">Music</NavLink>
                </div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/news">News</NavLink>
                </div>
                <div>
                    <NavLink className={c.navLink} activeClassName = {c.active} to="/settings">Settings</NavLink>
                </div>
            </div> <br/><br/>
            <div>
                FRIENDS
                <MyFriends store={props.store}/>
            </div>

        </nav>
    );
}

export default Nav;