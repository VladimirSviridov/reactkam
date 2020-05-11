import React from "react";
import c from './Nav.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./Friends/FriendItem";


function Nav(props) {

    let state = props.store.getState();

    let FriendsArray = state.sidebar.FriendsData.map (friend => <FriendItem img={friend.img} name={friend.name} id={friend.id}/>);
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
                {FriendsArray}
            </div>

        </nav>
    );
}

export default Nav;