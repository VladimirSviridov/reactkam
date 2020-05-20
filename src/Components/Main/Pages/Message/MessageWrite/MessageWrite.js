import React from "react";
import c from "./MessageWrite.module.css"


function MessageWrite(props) {

    let onChangeInput = (event) =>{
        let text = event.target.value;
        props.updateNewMessage(text);
    };

    return (
        <div>
            <textarea onChange={onChangeInput} type="text" value={props.NewMessage}
                      className={c.messageWrite} name="" id="" rows="3"/>
        </div>
    );
}

export default MessageWrite;