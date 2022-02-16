import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.DialogsPage;


    let dialogsElements = state.DialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.MessagesData.map(message => <Message key={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (e) => {
        props.sendMessage(e.newMessageBody);
    }


    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                {dialogsElements}
            </div>


            <div className={DialogsStyle.messages}>
               <div>{messagesElements}</div>
                <div>

                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}


const AddMessageForm = (props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            <div><button>Send</button></div>
        </form>
    )
})

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;