import {UsersAPI as userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initinalState = {
    PostsData: [
        {id: 1, post: 'Hello my friends', like: 8},
        {id: 2, post: 'Hi bro!', like: 17}],
    profile:null,
}

const profileReducer = (state = initinalState, action) => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                post: action.newPostText,
                like: 0
            };
            return  {
                ...state,
                PostsData : [...state.PostsData,newPost],
                newPostText : ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,profile
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;