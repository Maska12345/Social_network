import React from 'react';
import profileStyle from './Profile.module.css'



const Profile = () =>{
    return(
        <div className={profileStyle.content}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;