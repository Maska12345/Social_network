import Preloader from "../../Common/Preloader/Preloader";
import profileStyle from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode:false
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span>{this.state.status}</span>
                </div>
               :
                <div>
                    <input value={this.props.status}/>
                </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;