import React from "react";
import c from "./HeadPhoto.module.css"

console.log(c);

function HeadPhoto() {
    return (
        <div>
            <img className={c.headerPhoto} src="https://sun9-27.userapi.com/c851132/v851132400/10c933/kYXwl7aM1WM.jpg" alt="main img"/>
        </div>
    );
}

export default HeadPhoto;