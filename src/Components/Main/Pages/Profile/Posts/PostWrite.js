import React from "react";
import c from "./PostWrite.module.css"


function PostWrite(props) {

    let ChangeInput = (event) => {
        let text = event.target.value;
        props.updatePostText(text);
    };

    return (
        <div>
            <textarea className={c.postWrite} onChange={ChangeInput} type="text"
                      value={props.newPostText} rows="6"/>
        </div>
    );
}

export default PostWrite;