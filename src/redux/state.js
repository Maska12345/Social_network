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
    _callSubscriber(){
        console.log('changed state');
    },
    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 3,
                post: this._state.ProfilePage.newPostText,
                like: 0
            };
            this._state.ProfilePage.PostsData.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}



export default store;