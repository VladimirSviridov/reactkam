import React from "react";
import ButtonMessage from "./ButtonMessage";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/messagesReducer";
import {connect} from "react-redux";
import PostWrite from "../../Main/Pages/Profile/Posts/PostWrite";



let mapStoreToProps = (state) => {
    return {
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())}
    }
};

const ButtonMessageContainer = connect(mapStoreToProps, mapDispatchToProps)(ButtonMessage);

export default ButtonMessageContainer;