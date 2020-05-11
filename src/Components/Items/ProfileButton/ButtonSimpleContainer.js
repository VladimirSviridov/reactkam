import React from "react";
import {addPostActionCreator} from "../../../Redux/profileReducer";
import ButtonSimple from "./ButtonSimple";
import {connect} from "react-redux";


let mapStoreToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};

const ButtonSimpleContainer = connect(mapStoreToProps, mapDispatchToProps)(ButtonSimple);


export default ButtonSimpleContainer;