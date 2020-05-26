import React from "react";
import {connect} from "react-redux";
import MyFriends from "./MyFriends";



function MyFriendsContainer(props) {

    return (
        <MyFriends  FriendsData={props.FriendsData}/>
    );
}

let mapStateToProps = (state) => ({
    FriendsData: state.sidebar.FriendsData,
});


export default connect(mapStateToProps, {})(MyFriendsContainer);