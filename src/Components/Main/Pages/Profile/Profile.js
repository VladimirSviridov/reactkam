import React from "react";
import HeadPhoto from "../../../Items/Profile/HeadPhoto";
import UserPhoto from "../../../Items/Profile/UserPhoto";
import UserInfo from "../../../Items/Profile/UserInfo";
import PostWrite from "./Posts/PostWrite";
import PostItem from "./Posts/PostItem";
import c from "./Profile.module.css"
import ButtonSimple from "../../../Items/ProfileButton/ButtonSimple";
import PostWriteContainer from "./Posts/PostWriteContainer";
import ButtonSimpleContainer from "../../../Items/ProfileButton/ButtonSimpleContainer";


function Profile(props) {

    let state = props.store.getState();

    let PostItemArray = state.profilePage.PostsData.map(post => <PostItem img={post.img} text={post.message}
                                                                    likes={post.likesCount}/>);

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

                {PostItemArray}
            </section>
        </section>
    );
}

export default Profile;