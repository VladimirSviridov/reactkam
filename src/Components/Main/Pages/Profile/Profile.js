import React from "react";
import HeadPhoto from "../../../Items/Profile/HeadPhoto";
import UserPhoto from "../../../Items/Profile/UserPhoto";
import UserInfo from "../../../Items/Profile/UserInfo";
import PostWrite from "./Posts/PostWrite";
import PostItem from "./Posts/PostItem";
import c from "./Profile.module.css"


function Profile(props) {

    let PostItemArray = props.state.PostsData.map ( post => <PostItem img={post.img} text= {post.message} likes={post.likesCount}/>);

    return (
        <section>
            <HeadPhoto/>
            <div className={c.user}>
                <UserPhoto img={props.state.PostsData[0].img}/>
                <UserInfo/>
            </div>
            <section className="posts">
                <PostWrite newPostText={props.state.NewPostText}
                           updateNewPostText={props.updateNewPostText}
                           addPost={props.addPost}/>
                {PostItemArray}
            </section>
        </section>
    );
}

export default Profile;