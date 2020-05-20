import React from "react";
import {addMessage, updateNewMessage} from "../../../../../Redux/messagesReducer";
import MessageWrite from "./MessageWrite";
import {connect} from "react-redux";


let mapStoreToProps = (state) => {
    return {
        NewMessage: state.messagesPage.NewMessage
    }
};


const MessageWriteContainer = connect(mapStoreToProps, {addMessage, updateNewMessage})(MessageWrite);


export default MessageWriteContainer;