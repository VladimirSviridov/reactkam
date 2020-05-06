import React from "react";
import c from "./FriendItem.module.css";
import UserPhoto from "../../Items/Profile/UserPhoto";



function FriendItem(props) {

    return (
        <div>
            <div className={c.items}>
                <UserPhoto img={props.img}/>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default FriendItem;