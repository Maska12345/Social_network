import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";



let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} UpdatePostsText={store.UpdatePostsText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);