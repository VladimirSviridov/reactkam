import React from "react";
import {updateNewText} from "../../../../../Redux/profileReducer";
import PostWrite from "./PostWrite";
import {connect} from "react-redux";

let mapStoreToProps = (state) => {
    return {
        newPostText: state.profilePage.NewPostText
    }
};

const PostWriteContainer = connect(mapStoreToProps, {updateNewText})(PostWrite);

export default PostWriteContainer;