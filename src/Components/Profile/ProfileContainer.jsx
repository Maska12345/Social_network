import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useMatch} from "react-router";





class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        this.props.getUserProfile(userId);
    }

    render(){
        if(!this.props.isAuth){
            return <Navigate to="/login" />
        }
        return(

            <Profile {...this.props } profile={this.props.profile}/>
        )
}


}

let mapStateToProps = (state)=>({
    profile:state.ProfilePage.profile,
    isAuth: state.auth.isAuth
})
debugger

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}


export default connect(mapStateToProps,{getUserProfile}) (ProfileURLMatch);