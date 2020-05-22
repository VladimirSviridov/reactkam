import React from "react";
import {connect} from "react-redux";
import Message from "../Message";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../../../HOC/WithAuthRedirect";
import {compose} from "redux";


const MessageContainer = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return <Message {...props}/>
};

let mapStateToProps = (state) => ({
    MessagesPage: state.messagesPage,
});

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(MessageContainer);