import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, subscribe, UpdatePostsText} from "./redux/state";
import state from "./redux/state";



let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} UpdatePostsText={UpdatePostsText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(state);
subscribe(rerenderTree);