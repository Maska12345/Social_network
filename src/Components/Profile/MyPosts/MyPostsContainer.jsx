import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
        PostsData:state.ProfilePage.PostsData,
        newPostText:state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addPost:()=>{dispatch(addPostActionCreator())},
        changeText:(text)=>{dispatch(updateNewPostTextActionCreator(text))},

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;