import React from "react";
import UserPhoto from "../Profile/UserPhoto";
import PostItemText from "./PostItemText";


function PostItem() {
    return (
        <div>
            <div className="post__item">
                <UserPhoto/>
                <PostItemText/>
            </div>
        </div>
    );
}

export default PostItem;