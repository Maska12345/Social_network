const SEND_MESSAGE = 'SEND_MESSAGE';

let initinalState = {
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
};
const dialogsReducer = (state =initinalState,action) =>{

    switch (action.type) {
        case 'SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                MessagesData:[...state.MessagesData,{id: 6, message: body}],
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,newMessageBody
    }
}


export default dialogsReducer;