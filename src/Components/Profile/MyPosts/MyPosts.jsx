import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';



const MyPosts = (props) => {
    let postsElements = props.PostsData.map(post => <Post post={post.post} like={post.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let changeText = () =>{
        let text = newPostElement.current.value;
        //props.UpdatePostsText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <div className={postStyle.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeText} ref={newPostElement} value={props.newPostText}></textarea>
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