import React from "react";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./Dialogs/MessageItem";
import c from "./Message.module.css"
import PostWrite from "../Profile/Posts/PostWrite";
import ButtonSimple from "../../../Items/ButtonSimple";



const Message = (props) => {

    let Dialogs = props.state.UsersToDialog.map( users => <DialogItem img={users.img}  name = {users.name} id = {users.id}/> );

    let MessagesElements = props.state.MessagesData.map(el => <MessageItem text = {el.message}/>);

    return (
        <div className={c.messages}>

            <div className={c.dialogs}>
                {Dialogs}
            </div>
            <div className={c.message}>
                {MessagesElements}
                <PostWrite/>
            </div>
        </div>
    )
};

export default Message;