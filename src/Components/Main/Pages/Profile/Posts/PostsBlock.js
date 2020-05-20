import React from "react";
import PostWriteContainer from "./PostWriteContainer";
import ButtonSimpleContainer from "../../../../Items/ProfileButton/ButtonSimpleContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function PostsBlock(props) {

    return (
        <section className="posts">
            <div>
                <PostWriteContainer/>
                <ButtonSimpleContainer/>
            </div>
            <MyPostsContainer/>
        </section>
    );
}

export default PostsBlock;