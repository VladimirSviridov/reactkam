import React from "react";
import UserInfoPart from "./UserInfoPart";


function UserInfo() {
    return (
        <div>
            <UserInfoPart name = 'Name' info='Sviridov Vladimir'/>
            <UserInfoPart name = 'Age' info='25'/>
            <UserInfoPart name = 'Interests' info='HTML5, CSS3, ES5,6, JS, REACT'/>
            <UserInfoPart name = 'Skills' info='low'/>
        </div>
    );
}

export default UserInfo;