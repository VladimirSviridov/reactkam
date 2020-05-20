import React from "react";
import PostItem from "../PostItem";


function MyPosts(props) {

let PostItemArray = props.state.profilePage.PostsData.map(post => <PostItem key={post.id} img={post.img} text={post.message}
                                                                likes={post.likesCount}/>);
return (
    <div>
            {PostItemArray}
    </div>
);
}

export default MyPosts;