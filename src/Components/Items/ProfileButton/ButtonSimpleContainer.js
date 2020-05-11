import React from "react";
import {addPostActionCreator} from "../../../Redux/profileReducer";
import ButtonSimple from "./ButtonSimple";


function ButtonSimpleContainer(props) {

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

        return (
        <ButtonSimple AddPost={AddPost}/>
    );
}

export default ButtonSimpleContainer;