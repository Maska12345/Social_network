import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Ola'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Danila'}
    ];

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'very well)!!!'},
        {id: 4, message: 'What about you?'}
    ];

    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
            </div>


            <div className={DialogsStyle.messages}>
                <Message message={MessagesData[0].message}/>
                <Message message={MessagesData[1].message}/>
                <Message message={MessagesData[2].message}/>
                <Message message={MessagesData[3].message}/>
            </div>

        </div>
    )
}

export default Dialogs;