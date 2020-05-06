import React from "react";
import c from "./MessageWrite.module.css"


function MessageWrite(props) {
    let ChangeInput = () =>{
        let text = newMessage.current.value;
        props.updateNewMessage(text);
    };

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };
    return (
        <div>
            <textarea onChange={ChangeInput} ref={newMessage} type="text" value={props.NewMessage}
                      className={c.messageWrite} name="" id="" rows="3"/>
            <div>
                <button onClick={addMessage} className="btn-simple" type="button">
                    Отправить
                </button>
            </div>
        </div>
    );
}

export default MessageWrite;