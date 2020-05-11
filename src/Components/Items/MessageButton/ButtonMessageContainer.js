import React from "react";
import ButtonMessage from "./ButtonMessage";
import {addMessageActionCreator} from "../../../Redux/messagesReducer";


function ButtonMessageContainer(props) {

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

        return (
        <ButtonMessage addMessage={addMessage}/>
    );
}

export default ButtonMessageContainer;