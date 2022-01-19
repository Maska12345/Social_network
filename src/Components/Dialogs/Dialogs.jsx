import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.DialogsPage;


    let dialogsElements = state.DialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.MessagesData.map(message => <Message key={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageBody;
debugger;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                {dialogsElements}
            </div>


            <div className={DialogsStyle.messages}>
               <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;