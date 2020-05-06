import React from "react";
import UserPhoto from "../../../../Items/Profile/UserPhoto";
import PostItemText from "./PostItemText";
import c from "./PostItem.module.css"


function PostItem(props) {

    return (
        <div>
            <div className={c.postItem}>
                <UserPhoto img={props.img}/>
                <PostItemText text = {props.text} likes={props.likes}/>
            </div>
        </div>
    );
}

export default PostItem;