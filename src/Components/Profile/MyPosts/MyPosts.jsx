import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () =>{
    return(
            <div>
                My posts
                <div>
                    new post
                </div>
               <Post />
            </div>
    )
}

export default MyPosts;