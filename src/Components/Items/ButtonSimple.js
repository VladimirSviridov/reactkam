import React from "react";
import c from "./ButtonSimple.module.css"



function ButtonSimple(props) {

    let ChangeInput = () =>{
        let text = newPost.current.value;
        props.updateNewPostText(text);
    };

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    };


        return (
        <div>
            <input onChange={ChangeInput} ref={newPost} type="text" value={props.newPostText}/>
            <button onClick={addPost} className="btn-simple" type="button">
                Отправить
            </button>
        </div>
    );
}

export default ButtonSimple;