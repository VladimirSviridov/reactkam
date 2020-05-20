import React from "react";
import HeadPhoto from "../../Items/Profile/HeadPhoto";
import UserPhoto from "../../Items/Profile/UserPhoto";
import UserInfo from "../../Items/Profile/UserInfo";
import c from "../../Main/Pages/Profile/Profile.module.css"
import Preloader from "../Preloader/Preloader";


function UserBlock(props) {
    if(!props.profile){
        return <Preloader/>
    }else {
        return (
            <div>
                <HeadPhoto/>
                <div className={c.user}>
                    <UserPhoto img={props.profile.photos.small}/>
                    <UserInfo profile={props}/>
                </div>
            </div>
        );
    }

}

export default UserBlock;