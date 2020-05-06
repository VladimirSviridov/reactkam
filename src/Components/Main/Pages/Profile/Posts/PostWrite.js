import React from "react";
import ButtonSimple from "../../../../Items/ButtonSimple";
import c from "./PostWrite.module.css"


function PostWrite(props) {

    return (
        <div>
            <textarea className={c.postWrite} name="" id="" cols="30" rows="10">
            </textarea>
            <ButtonSimple addPost={props.addPost}/>
        </div>
    );
}

export default PostWrite;