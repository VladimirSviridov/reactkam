import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Items/Preloader/Preloader"
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersInUserContainer,
} from "../../Redux/userSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersInUserContainer(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFollowing,
        getUsers
    }))(UsersContainer)