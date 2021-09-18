import React from 'react';
import DialogsStyle from './Message.module.css'

const Message = (props) => {
    return (
        <div className={DialogsStyle.message}>
            {props.message}
        </div>
    )
}

export default Message;