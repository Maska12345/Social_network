import React from 'react';
import profileStyle from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <div className={profileStyle.descriptionBlock}>
                <img src={props.profile.photos.large} />
                name:{props.profile.fullName},
                <ProfileStatus status={'Hello!I am Status!!!'} />

            </div>
        </div>
    )
}

export default ProfileInfo;