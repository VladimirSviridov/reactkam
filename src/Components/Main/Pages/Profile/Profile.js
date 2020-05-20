import React from "react";
import PostsBlock from "./Posts/PostsBlock";
import UserBlock from "../../../Items/Profile/UserBlock";

function Profile(props) {
    return (
        <section>
            <UserBlock profile={props.profile}/>
            <PostsBlock />
        </section>
    );
}

export default Profile;