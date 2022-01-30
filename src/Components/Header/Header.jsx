import React from 'react';
import headerStyle from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) =>{
    return(
        <header className={headerStyle.header}>
            <img className='logo' src="https://img.pngio.com/atom-icon-png-401284-free-icons-library-atomic-png-256_256.jpg"/>
            <div className={headerStyle.loginBlock}>
                {props.isAuth?props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;