import React from "react";
import UserInfoPart from "./UserInfoPart";
import UserStatus from "./UserStatus/UserStatus";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";


function UserInfo(props) {
    return (
        <div>
            <UserInfoPart name = 'Name' info='Sviridov Vladimir'/>
            <UserInfoPart name = 'Age' info='25'/>
            <UserInfoPart name = 'Interests' info='HTML5, CSS3, ES5,6, JS, REACT'/>
            <UserInfoPart name = 'Skills' info='low'/>
            <UserStatusWithHooks status={props.status}
                        updateUserStatus={props.updateUserStatus}/>
        </div>
    );
}

export default UserInfo;