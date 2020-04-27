import React from "react";
import c from "./UserPhoto.module.css"


function UserPhoto() {
    return (
        <div>
            <img className={c.userPhoto} src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="people`s photo"/>
        </div>
    );
}

export default UserPhoto;