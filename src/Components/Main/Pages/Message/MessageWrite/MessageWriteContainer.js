import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../../Redux/messagesReducer";
import MessageWrite from "./MessageWrite";


function MessageWriteContainer(props) {
    
    let state = props.store.getState();

    let ChangeInput = (text) =>{
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    };
    let AddMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    return (
        <MessageWrite NewMessage={state.messagesPage.NewMessage} changeInput={ChangeInput} addMessage={AddMessage}/>
    );
}

export default MessageWriteContainer;