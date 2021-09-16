import React from 'react';
import DialogsStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                <div className={DialogsStyle.dialog + ' ' + DialogsStyle.active}>
                    <NavLink to='/dialogs/1'>Max</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to='/dialogs/2'>Olya</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to='/dialogs/3'>Evgen</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to='/dialogs/4'>Sveta</NavLink>
                </div>
                <div className={DialogsStyle.dialog}>
                    <NavLink to='/dialogs/5'>Danila</NavLink>
                </div>
            </div>
            <div className={DialogsStyle.messages}>
                <div className={DialogsStyle.message}>
                    Hi,How are you?
                </div>
                <div className={DialogsStyle.message}>
                    Hi,very well!!)
                </div>
                <div className={DialogsStyle.message}>
                    What are you doing?
                </div>
            </div>

        </div>
    )
}

export default Dialogs;