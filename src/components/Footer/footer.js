import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className='footer'> 
          <span>  <img className='footer-logo' src="images/ipl_logo.png" alt='ipl logo'/></span>
          <span>(c) 2018 BCCI </span>
        </div>
    )
}

export default Footer;