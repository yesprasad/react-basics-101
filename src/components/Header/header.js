import React from 'react';
import './header.css';
import FontAwesome from 'react-fontawesome';
import SideNav from '../SideNav/sideNav';
import {Link} from 'react-router-dom';

const Header =(props) => {

    const navBars = () => {
        return(
            <div className='bars'>
                <FontAwesome
                name='bars'
                onClick= {props.onOpenNav}
                style={{
                    color: '#000',
                    padding:'10px',
                    cursor: 'pointer'
                }}>
                 
                </FontAwesome>
            </div>
        )
    }

    const logo = () => {
        return(
            <div className="logo-box">
                <img className='logo' src="images/ipl_logo.png" alt='ipl logo'/>
            </div>
        );
    };

    const headerText =() => {
       return(
        <div className='text-box'>
            <h2 className='heading-primary'>
            <span className='heading-primary-main'>DON'T JUST WATCH</span>
            <span className='heading-primary-sub'>Play the IPL</span>
            </h2>
        </div>
       );
    };

    

    return(
        <header className='header'>
        
        <SideNav {...props} />
            {navBars()}
            {logo()}
            {headerText()}
        </header>
    )
}

export default Header;