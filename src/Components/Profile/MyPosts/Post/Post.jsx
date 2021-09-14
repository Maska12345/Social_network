import React from 'react';
import postStyle from "./Post.module.css";



const Post = (props) =>{
    return(
                <div  className={postStyle.post}>
                    <img src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
                    {props.message}
                    <div><span>like {props.like}</span></div>
                </div>

    )
}

export default Post;