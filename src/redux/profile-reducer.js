const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initinalState = {
    PostsData: [
        {id: 1, post: 'Hello my friends', like: 8},
        {id: 2, post: 'Hi bro!', like: 17}],
        newPostText:'',
}

const profileReducer = (state =initinalState,action) =>{


    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                post: state.newPostText,
                like: 0
            };
            state.PostsData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }
}

export default profileReducer;