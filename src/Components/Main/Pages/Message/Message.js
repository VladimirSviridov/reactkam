import React from "react";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./Dialogs/MessageItem";
import c from "./Message.module.css"
import MessageWriteContainer from "./MessageWrite/MessageWriteContainer";
import ButtonMessageContainer from "../../../Items/MessageButton/ButtonMessageContainer";



const Message = (props) => {

    let state = props.store.getState();

    let Dialogs = state.messagesPage.UsersToDialog.map( users => <DialogItem img={users.img}  name = {users.name} id = {users.id}/> );
    let MessagesElements = state.messagesPage.MessagesData.map(el => <MessageItem text = {el.message}/>);

    return (
        <div className={c.messages}>
            <div className={c.dialogs}>
                {Dialogs}
            </div>
            <div className={c.message}>
                {MessagesElements}
                <div>
                    <MessageWriteContainer store={props.store}/>
                    <ButtonMessageContainer store={props.store}/>
                </div>

            </div>
        </div>
    )
};

export default Message;