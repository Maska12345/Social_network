import React from 'react';
import headerStyle from './Header.module.css'


const Header = () =>{
    return(
        <header className={headerStyle.header}>
            <img className='logo' src="https://img.pngio.com/atom-icon-png-401284-free-icons-library-atomic-png-256_256.jpg"/>
        </header>
    )
}

export default Header;