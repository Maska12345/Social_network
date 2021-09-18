import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let PostsData = [
        {id: 1, post: 'Hello my friends', like: 8},
        {id: 2, post: 'Hi bro!', like: 17},
    ];

    return (
        <div className={postStyle.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={postStyle.posts}>
                <Post post={PostsData[0].post} like={PostsData[0].like}/>
                <Post post={PostsData[1].post} like={PostsData[1].like}/>
            </div>


        </div>
    )
}

export default MyPosts;