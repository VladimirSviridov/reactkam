import React from "react";
import c from './Users.module.css'
import * as axios from 'axios'
import defaultUserPhoto from '../../img/defaultUserPhoto.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (

            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={c.usersPhoto} src={user.photos.small != null
                            ? user.photos.small
                            : defaultUserPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unFollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"user.location.city"}
                        </div>
                        <div>
                            {"user.location.country"}
                        </div>
                    </span>
                </span>
                    </div>)}
            </div>
        )
    }
}

export default Users;