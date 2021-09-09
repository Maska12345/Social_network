import React from 'react';
import navStyle from './Nav.module.css'



const Nav = () =>{
    return(
        <nav className={navStyle.nav}>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Nav;