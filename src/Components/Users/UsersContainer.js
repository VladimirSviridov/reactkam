import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unFollowAC, setUsers} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
};
let mapDispatchToProps =(dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unFollow: (userId) =>{
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);