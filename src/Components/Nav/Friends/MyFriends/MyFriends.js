import React from "react";
import FriendItem from "../FriendItem";


function MyFriends(props) {

    let FriendsArray = props.FriendsData.map(friend => <FriendItem img={friend.img}
                                                                   name={friend.name}
                                                                   key={friend.id}
                                                                   id={friend.id}/>);
    return (
        <div>
            {FriendsArray}
        </div>
    );
}

export default MyFriends;