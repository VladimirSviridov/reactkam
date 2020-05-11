import React from "react";
import HeadPhoto from "../../../Items/Profile/HeadPhoto";
import UserPhoto from "../../../Items/Profile/UserPhoto";
import UserInfo from "../../../Items/Profile/UserInfo";
import c from "./Profile.module.css"
import PostWriteContainer from "./Posts/PostWriteContainer";
import ButtonSimpleContainer from "../../../Items/ProfileButton/ButtonSimpleContainer";
import MyPosts from "./Posts/MyPosts/MyPosts";


function Profile(props) {

    let state = props.store.getState();
    return (
        <section>
            <HeadPhoto/>
            <div className={c.user}>
                <UserPhoto img={state.profilePage.PostsData[0].img}/>
                <UserInfo/>
            </div>
            <section className="posts">
                <div>
                    <PostWriteContainer store={props.store}/>
                    <ButtonSimpleContainer store={props.store}/>
                </div>
                    <MyPosts store={props.store}/>
            </section>
        </section>
    );
}

export default Profile;