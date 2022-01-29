import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";




class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/21769`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render(){
        return(
            <Profile {...this.props } profile={this.props.profile}/>
        )
}


}

let mapStateToProps = (state)=>({
    profile:state.ProfilePage.profile,
})
debugger

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);