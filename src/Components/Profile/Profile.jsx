import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.state.PostsData} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
        </div>
    )
}

export default Profile;