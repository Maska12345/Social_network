import React from 'react';
import navStyle from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <NavLink to={"/profile"}>Profile</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={"/dialogs"}>Messages</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={"/users"}>Users</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={"/news"}>News</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={"/music"}>Music</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={"/settings"}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;