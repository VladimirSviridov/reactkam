import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../../Redux/messagesReducer";
import MessageWrite from "./MessageWrite";
import {updateNewTextActionCreator} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";
import PostWrite from "../../Profile/Posts/PostWrite";


let mapStoreToProps = (state) => {
    return {
        NewMessage: state.messagesPage.NewMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeInput: (text) => {dispatch(updateNewMessageActionCreator(text))},
        addMessage: () => {dispatch(addMessageActionCreator())}
    }
};

const MessageWriteContainer = connect(mapStoreToProps, mapDispatchToProps)(MessageWrite);


export default MessageWriteContainer;