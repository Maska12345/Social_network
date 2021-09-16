import React from 'react';
import DialogsStyle from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={DialogsStyle.dialogs}>
            <div className={DialogsStyle.dialogItems}>
                <div className={DialogsStyle.dialog  + ' ' + DialogsStyle.active}>
                    Max
                </div>
                <div className={DialogsStyle.dialog}>
                    Olya
                </div>
                <div className={DialogsStyle.dialog}>
                    Evgen
                </div>
                <div className={DialogsStyle.dialog}>
                    Sveta
                </div>
                <div className={DialogsStyle.dialog}>
                    Danila
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