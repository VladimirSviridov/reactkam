import React from "react";
import c from "./HeadPhoto.module.css"

function HeadPhoto() {
    return (
        <div>
            <img className={c.headerPhoto} src="../../../img/headerProfilePhoto.jpg" alt="main img"/>
        </div>
    );
}

export default HeadPhoto;