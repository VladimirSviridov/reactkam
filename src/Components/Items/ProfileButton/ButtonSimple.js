import React from "react";
import c from "./ButtonSimple.module.css"


function ButtonSimple(props) {

    let addPost = () => props.AddPost();

        return (
        <div>
            <button onClick={addPost} className="btn-simple" type="button">
                Отправить
            </button>
        </div>
    );
}

export default ButtonSimple;