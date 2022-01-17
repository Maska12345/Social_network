import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let changeText = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    debugger;
    return (

            <MyPosts UpdatePostsText={changeText} addPost={addPost} PostsData={state.ProfilePage.PostsData} newPostText={state.ProfilePage.newPostText} />
    )
}

export default MyPostsContainer;