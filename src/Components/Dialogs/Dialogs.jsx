import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.MessagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                {dialogsElements}
            </div>


            <div className={DialogsStyle.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;