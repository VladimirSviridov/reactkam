import React from "react";
import c from "./Header.module.css"


function Header() {
    return (
        <header className={c.header}>
            <img className={c.logo}
                 src="img/korean-art-traditional-korean-designs-pattern-islamic-pattern.jpg"
                 alt="logo"/>
        </header>
    );
}

export default Header;