import React from "react";
import UserPhoto from "../Profile/UserPhoto";
import PostItemText from "./PostItemText";
import c from "./PostItem.module.css"


function PostItem() {
    return (
        <div>
            <div className={c.postItem}>
                <UserPhoto/>
                <PostItemText/>
            </div>
        </div>
    );
}

export default PostItem;