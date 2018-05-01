import React from 'react';
import './header.css';

const Header =() => {
    return(
        <header className='header'>
         <div class="logo-box">
        <img className='logo' src="images/ipl_logo.png" alt='ipl logo'/>
        </div>
            <div className='text-box'>
            <h2 className='heading-primary'>
            <span className='heading-primary-main'>DON'T JUST WATCH</span>
            <span className='heading-primary-sub'>Play the IPL</span>
            </h2>
            </div>
        </header>
    )
}

export default Header;