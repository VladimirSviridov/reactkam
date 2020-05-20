import React from "react";
import c from "./Message.module.css"
import MessageWriteContainer from "./MessageWrite/MessageWriteContainer";
import ButtonMessageContainer from "../../../Items/MessageButton/ButtonMessageContainer";
import MyMessages from "./MessageWrite/MyMessages/MyMessages";
import MyDialogs from "./Dialogs/MyDialogs/MyDialogs";



const Message = (props) => {

    return (
        <div className={c.messages}>
            <div className={c.dialogs}>
                <MyDialogs store={props.store}/>
            </div>
            <div className={c.message}>
                <MyMessages store={props.store} />
                <div>
                    <MessageWriteContainer store={props.store}/>
                    <ButtonMessageContainer store={props.store}/>
                </div>

            </div>
        </div>
    )
};

export default Message;