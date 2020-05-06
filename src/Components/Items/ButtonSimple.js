import React from "react";
import c from "./ButtonSimple.module.css"



function ButtonSimple(props) {

    let newPost = React.createRef();

    let addPost = () => {
        debugger;
        props.addPost(newPost.current.value)};

    return (
        <div>
            <input ref={newPost} type="text"/>
            <button onClick={addPost} className="btn-simple" type="submit">
                Отправить
            </button>
        </div>
    );
}

export default ButtonSimple;