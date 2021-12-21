import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

// let PostsData = [
//     {id: 1, post: 'Hello my friends', like: 8},
//     {id: 2, post: 'Hi bro!', like: 17},
// ];
//
// let DialogsData = [
//     {id: 1, name: 'Max'},
//     {id: 2, name: 'Ola'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Danila'}
// ];
//
// let MessagesData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'very well)!!!'},
//     {id: 4, message: 'What about you?'}
// ];


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
