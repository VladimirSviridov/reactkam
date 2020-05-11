import React from "react";
import {updateNewTextActionCreator} from "../../../../../Redux/profileReducer";
import PostWrite from "./PostWrite";
import {connect} from "react-redux";



let mapStoreToProps = (state) => {
    return {
        newPostText: state.profilePage.NewPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {dispatch(updateNewTextActionCreator(text));}
    }
};

const PostWriteContainer = connect(mapStoreToProps, mapDispatchToProps)(PostWrite);


export default PostWriteContainer;