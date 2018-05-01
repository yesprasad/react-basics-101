import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SideNavItems = () => {
    return(
        <div className='mainOption'>
            <div>
                <Link to='/' className ='links'>
                <FontAwesome name='home' style={{
                    padding:'10px'
                }}/>Home
                </Link>
                
            </div>
            <div>
            <Link to='/pointsTable'>
                <FontAwesome name='bar-chart' style={{
                 padding:'10px'
                }}/>Points Table
                </Link>
                
            </div>
        </div>
    )
}

export default SideNavItems;