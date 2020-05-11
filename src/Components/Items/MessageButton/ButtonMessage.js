import React from "react";
import c from "./ButtonMessage.module.css"


function ButtonMessage(props) {

    let addMessage = () => props.addMessage();

        return (
        <div>
            <button onClick={addMessage} className="btn-simple" type="button">
                Отправить
            </button>
        </div>
    );
}

export default ButtonMessage;