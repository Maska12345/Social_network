const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) =>{
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        body:body
    }
}

export default dialogsReducer;