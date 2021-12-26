let store={
    _state:{
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
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('changed state');
    },
    addPost(){
        let newPost = {
            id: 3,
            post: this._state.ProfilePage.newPostText,
            like: 0
        };
        this._state.ProfilePage.PostsData.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    UpdatePostsText(text){
        this._state.ProfilePage.newPostText = text;
        this._callSubscriber(this._state);

},
    subscribe (observer){
        this._callSubscriber = observer;
    }
}



export default store;