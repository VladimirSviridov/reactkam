import React from "react";


function UserInfoPart(props) {
    return (
        <div>
            <div>
                {props.name}: {props.info}
            </div>
        </div>
    );
}

export default UserInfoPart;