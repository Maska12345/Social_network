import Preloader from "../../Common/Preloader/Preloader";
import profileStyle from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode:true
    }

    render() {
        return (
            <div>
                {!this.props.editMode &&
                <div>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.props.editMode &&
                <div>
                    <input value={this.props.status}/>
                </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;