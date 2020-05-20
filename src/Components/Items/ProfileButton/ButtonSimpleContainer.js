import React from "react";
import {addPost} from "../../../Redux/profileReducer";
import ButtonSimple from "./ButtonSimple";
import {connect} from "react-redux";


let mapStoreToProps = (state) => ({});


const ButtonSimpleContainer = connect(mapStoreToProps, {addPost})(ButtonSimple);


export default ButtonSimpleContainer;