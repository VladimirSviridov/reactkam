import React from "react";
import ButtonMessage from "./ButtonMessage";
import {addMessage } from "../../../Redux/messagesReducer";
import {connect} from "react-redux";



let mapStoreToProps = (state) => {
    return {
    }
};

const ButtonMessageContainer = connect(mapStoreToProps, {addMessage})(ButtonMessage);

export default ButtonMessageContainer;