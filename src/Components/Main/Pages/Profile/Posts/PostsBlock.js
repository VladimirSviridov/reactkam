import React from "react";
import PostWriteContainer from "./PostWriteContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function PostsBlock() {

    return (
        <section className="posts">
            <div>
                <PostWriteContainer/>
            </div>
            <MyPostsContainer/>
        </section>
    );
}

export default PostsBlock;