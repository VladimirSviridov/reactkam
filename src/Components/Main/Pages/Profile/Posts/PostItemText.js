import React from "react";
import c from "./PostItemText.module.css"


function PostItemText(props) {

    return (
        <div>
            <div className={c.postItemText}>
                {props.text}<br/>
                Likes: {props.likes}
            </div>
        </div>
    );
}

export default PostItemText;