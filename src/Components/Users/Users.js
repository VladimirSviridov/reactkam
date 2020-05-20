import React from "react";
import c from "./Users.module.css";
import defaultUserPhoto from "../../img/defaultUserPhoto.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 150);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={c.usersPagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? c.selectedPage : c.usersPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            <div className={c.usersCols}>
                {props.users.map(user =>
                    <div key={user.id}>
                        <div className={c.userFull}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={c.usersPhoto} src={user.photos.small != null
                                    ? user.photos.small
                                    : defaultUserPhoto}/>
                            </NavLink>
                            <div>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        usersAPI.unFollow(user.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(user.id);
                                            }
                                        });
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        usersAPI.follow(user.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        });
                                    }}>Follow</button>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Users;