import React from 'react';
import {sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) =>{
    return{
        DialogsPage:state.DialogsPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage:(newMessageBody)=>{dispatch(sendMessageCreator(newMessageBody))},

    }
}

 let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;