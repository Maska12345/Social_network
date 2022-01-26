import preloader from "../../../assets/images/preloader-images.gif";
import React from "react";

let Preloader = ()=>{
    return(
        <div>
            <img src={preloader} style={{width:100}}/>
        </div>

    )
}

export default Preloader