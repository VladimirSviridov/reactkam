import React from "react";
import {addPost} from "../../../../../Redux/profileReducer";
import PostWrite from "./PostWrite";
import {connect} from "react-redux";

let mapStoreToProps = () => {
    return {}
};

const PostWriteContainer = connect(mapStoreToProps, {addPost})(PostWrite);

export default PostWriteContainer;