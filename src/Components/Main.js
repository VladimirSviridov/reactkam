import React from "react";
import Profile from "./Pages/Profile";
import c from "./Main.module.css"


function Main() {
    return (
        <main className={c.main}>
            <Profile/>
        </main>
    );
}

export default Main;