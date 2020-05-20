import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 8059;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
        return (
            <section>
                <Profile {...this.props} profile={this.props.profile}/>
            </section>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithURLProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithURLProfileContainer);