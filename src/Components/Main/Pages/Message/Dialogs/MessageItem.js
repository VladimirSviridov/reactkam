import c from "../Message.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={c.message__inner}>
            {props.text}
        </div>
    )
};
export default MessageItem;