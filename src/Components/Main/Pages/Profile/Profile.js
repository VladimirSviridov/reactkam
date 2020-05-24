import React from "react";
import PostsBlock from "./Posts/PostsBlock";
import UserBlock from "../../../Items/Profile/UserBlock";

function Profile(props) {
    return (
        <section>
            <UserBlock profile={props.profile}
                       status={props.status}
                       updateUserStatus={props.updateUserStatus}/>
            <PostsBlock />
        </section>
    );
}

export default Profile;