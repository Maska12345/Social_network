import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            sidebar:{},
            newMessageBody:''
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

        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);

    }
}

export default store;