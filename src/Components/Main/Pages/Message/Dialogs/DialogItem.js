import c from "../Message.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import UserPhoto from "../../../../Items/Profile/UserPhoto";


const DialogItem = (props) => {

    let link = "/dialog/" + props.id;
    return (
        <div className={c.dialog + " " + c.active}>
            <UserPhoto img={props.img}/>
            <NavLink to={link}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;