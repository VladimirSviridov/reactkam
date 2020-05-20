import React from "react";

import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainer extends React.Component{

    render(){
        return (
            <section>
                <MyPosts {...this.props} />
            </section>
        );
    }
}

let mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(MyPostsContainer);