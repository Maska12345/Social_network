import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.PostsData.map(post => <Post post={post.post} like={post.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div className={postStyle.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={postStyle.posts}>
                {postsElements}
            </div>


        </div>
    )
}

export default MyPosts;