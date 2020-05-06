import React from "react";
import c from "./UserPhoto.module.css"

function UserPhoto(props) {

    return (
        <div>
            <img className={c.userPhoto} src={props.img} alt="people`s photo"/>
        </div>
    );
}

export default UserPhoto;