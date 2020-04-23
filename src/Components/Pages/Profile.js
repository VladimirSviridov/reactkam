import React from "react";
import HeadPhoto from "../Profile/HeadPhoto";
import UserPhoto from "../Profile/UserPhoto";
import UserInfo from "../Profile/UserInfo";
import PostWrite from "../Posts/PostWrite";
import PostItem from "../Posts/PostItem";


function Profile() {
    return (
        <section>
            <HeadPhoto/>
            <div className="user">
                <UserPhoto/>
                <UserInfo/>
            </div>
            <section className="posts">
                <PostWrite/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </section>
        </section>
    );
}

export default Profile;