import React from "react";
import {updateNewTextActionCreator} from "../../../../../Redux/profileReducer";
import PostWrite from "./PostWrite";


function PostWriteContainer(props) {
    let state = props.store.getState();
    let ChangeInput = (text) =>{
        props.store.dispatch(updateNewTextActionCreator(text));
    };

    return (
        <PostWrite updatePostText={ChangeInput} newPostText={state.profilePage.NewPostText} />
    );
}

export default PostWriteContainer;