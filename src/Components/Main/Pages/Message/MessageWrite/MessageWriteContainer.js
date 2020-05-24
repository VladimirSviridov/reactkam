import React from "react";
import {addMessage} from "../../../../../Redux/messagesReducer";
import MessageWrite from "./MessageWrite";
import {connect} from "react-redux";


let mapStoreToProps = () => {
    return {}
};


const MessageWriteContainer = connect(mapStoreToProps, {addMessage})(MessageWrite);


export default MessageWriteContainer;