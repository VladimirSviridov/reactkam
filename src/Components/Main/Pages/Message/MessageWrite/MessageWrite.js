import React from "react";
import c from "./MessageWrite.module.css"
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../../Redux/messagesReducer";


function MessageWrite(props) {

    let onChangeInput = (event) =>{
        let text = event.target.value;
        props.changeInput(text);
    };


    return (
        <div>
            <textarea onChange={onChangeInput} type="text" value={props.NewMessage}
                      className={c.messageWrite} name="" id="" rows="3"/>
            <div>
                {/*<button onClick={onAddMessage} className="btn-simple" type="button">
                    Отправить
                </button>*/}
            </div>
        </div>
    );
}

export default MessageWrite;