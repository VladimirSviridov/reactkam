import React from "react";
import c from "./Header.module.css"
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <header className={c.header}>
            <img className={c.logo}
                 src="../../img/korean-art-traditional-korean-designs-pattern-islamic-pattern.jpg"
                 alt="logo"/>

            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div onClick={props.logout}>Выйти из профиля {props.login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;