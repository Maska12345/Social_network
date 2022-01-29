const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initinalState = {
    PostsData: [
        {id: 1, post: 'Hello my friends', like: 8},
        {id: 2, post: 'Hi bro!', like: 17}],
    newPostText: '',
    profile:null,
}

const profileReducer = (state = initinalState, action) => {


    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                post: state.newPostText,
                like: 0
            };
            return  {
                ...state,
                PostsData : [...state.PostsData,newPost],
                newPostText : ''
            };

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText : action.newText
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


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,profile
    }
}

export default profileReducer;