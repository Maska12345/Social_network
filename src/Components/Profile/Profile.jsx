import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.state.PostsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;