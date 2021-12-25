let rerenderTree = () =>{
     console.log('changed state');
}

let state={
    ProfilePage: {
        PostsData: [
            {id: 1, post: 'Hello my friends', like: 8},
            {id: 2, post: 'Hi bro!', like: 17}],
        newPostText:'',
    },
    DialogsPage:{
        MessagesData:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'very well)!!!'},
            {id: 4, message: 'What about you?'}
        ],
        DialogsData:[
            {id: 1, name: 'Max'},
            {id: 2, name: 'Ola'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Danila'}
            ]
    },
}

export const addPost = () =>{
    let newPost = {
        id: 3,
        post: state.ProfilePage.newPostText,
        like: 0
    };
    state.ProfilePage.PostsData.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderTree(state);

}

export const UpdatePostsText = (text) =>{
    state.ProfilePage.newPostText = text;
    rerenderTree(state);

}

export const subscribe = (observer) =>{
    rerenderTree = observer;
}

export default state;