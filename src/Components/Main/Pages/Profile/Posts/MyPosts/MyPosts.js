import React from "react";
import PostItem from "../PostItem";


function MyPosts(props) {

let state = props.store.getState();

let PostItemArray = state.profilePage.PostsData.map(post => <PostItem img={post.img} text={post.message}
                                                                likes={post.likesCount}/>);
return (
    <div>
            {PostItemArray}
    </div>
);
}

export default MyPosts;