import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.state.PostsData} addPost={props.addPost} newPostText={props.state.newPostText} UpdatePostsText={props.UpdatePostsText}/>
        </div>
    )
}

export default Profile;