import React from "react";
import c from "./Message.module.css"
import MessageWriteContainer from "./MessageWrite/MessageWriteContainer";
import ButtonMessageContainer from "../../../Items/MessageButton/ButtonMessageContainer";
import MyMessages from "./MessageWrite/MyMessages/MyMessages";
import MyDialogs from "./Dialogs/MyDialogs/MyDialogs";
import {Redirect} from "react-router-dom";



const Message = (props) => {


    return (
        <div className={c.messages}>
            <div className={c.dialogs}>
                <MyDialogs UsersToDialog={props.MessagesPage.UsersToDialog}/>
            </div>
            <div className={c.message}>
                <MyMessages MessagesData={props.MessagesPage.MessagesData} />
                <div>
                    <MessageWriteContainer />
                    <ButtonMessageContainer />
                </div>

            </div>
        </div>
    )
};

export default Message;