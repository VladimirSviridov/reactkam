import React from "react";

import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyPostsContainer = React.memo(props => {
    console.log('render');
        return <section>
            <MyPosts PostsData={props.PostsData} />
        </section>
});

let mapStateToProps = (state) => ({
    PostsData: state.profilePage.PostsData
});

export default connect(mapStateToProps)(MyPostsContainer);