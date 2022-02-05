import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {useMatch} from "react-router";
import {UsersAPI as userAPI} from "../../api/api";




class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        this.props.getUserProfile(userId);
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

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}


export default connect(mapStateToProps,{getUserProfile}) (ProfileURLMatch);