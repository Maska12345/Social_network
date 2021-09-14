import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () =>{
    return(
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <Post message="Hello my friends" like="7"/>
                <Post message="Hi bro!" like="18"/>
                <Post />
                <Post />
                <Post />
            </div>
    )
}

export default MyPosts;