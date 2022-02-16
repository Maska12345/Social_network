import React from 'react';
import postStyle from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let postsElements = props.PostsData.map(post => <Post post={post.post} like={post.like}/>);

    let newPostElement = React.createRef();

    let onaddPost = (values) => {
        props.addPost(values.newPostText);

    }


    return (
        <div className={postStyle.postsBlock}>
            <h3>My posts</h3>
            <div>

            </div>
            <div className={postStyle.posts}>
                {postsElements}
            </div>

            <AddNewPostFormRedux onSubmit={onaddPost}/>
        </div>
    )
}


const AddNewPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;